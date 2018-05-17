<?php

namespace spec\Sylius\AdminOrderCreationPlugin\EventListener;

use Doctrine\Common\Persistence\ObjectManager;
use Payum\Core\Model\GatewayConfigInterface;
use Payum\Core\Payum;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;
use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Sender\OrderPaymentLinkSenderInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

final class PaymentLinkCreationListenerSpec extends ObjectBehavior
{
    function let(Payum $payum, ObjectManager $orderManager, OrderPaymentLinkSenderInterface $orderPaymentLinkSender)
    {
        $this->beConstructedWith($payum, $orderManager, $orderPaymentLinkSender, 'sylius_shop_order_after_pay');
    }

    function it_sets_authorize_link_for_last_order_new_payment_requiring_authorization_and_sends_it(
        Payum $payum,
        ObjectManager $orderManager,
        OrderPaymentLinkSenderInterface $orderPaymentLinkSender,
        GenericTokenFactoryInterface $tokenFactory,
        TokenInterface $token,
        GenericEvent $event,
        OrderInterface $order,
        PaymentInterface $payment,
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig
    ) {
        $event->getSubject()->willReturn($order);
        $order->getLastPayment(PaymentInterface::STATE_NEW)->willReturn($payment);

        $payment->getMethod()->willReturn($paymentMethod);
        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);

        $gatewayConfig->getConfig()->willReturn(['use_authorize' => true]);
        $gatewayConfig->getGatewayName()->willReturn('PAYPAL');

        $payum->getTokenFactory()->willReturn($tokenFactory);

        $tokenFactory
            ->createAuthorizeToken('PAYPAL', $payment, 'sylius_shop_order_after_pay')
            ->willReturn($token)
        ;

        $token->getAfterUrl()->willReturn('http://url-to-pay.com');

        $payment->setDetails(['payment-link' => 'http://url-to-pay.com'])->shouldBeCalled();
        $orderPaymentLinkSender->sendPaymentLink($order)->shouldBeCalled();

        $orderManager->flush()->shouldBeCalled();

        $this->setPaymentLink($event);
    }

    function it_sets_capture_link_for_last_order_new_payment_requiring_authorization(
        Payum $payum,
        ObjectManager $orderManager,
        OrderPaymentLinkSenderInterface $orderPaymentLinkSender,
        GenericTokenFactoryInterface $tokenFactory,
        TokenInterface $token,
        GenericEvent $event,
        OrderInterface $order,
        PaymentInterface $payment,
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig
    ) {
        $event->getSubject()->willReturn($order);
        $order->getLastPayment(PaymentInterface::STATE_NEW)->willReturn($payment);

        $payment->getMethod()->willReturn($paymentMethod);
        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);

        $gatewayConfig->getConfig()->willReturn(['use_authorize' => false]);
        $gatewayConfig->getGatewayName()->willReturn('PAYPAL');

        $payum->getTokenFactory()->willReturn($tokenFactory);

        $tokenFactory
            ->createCaptureToken('PAYPAL', $payment, 'sylius_shop_order_after_pay')
            ->willReturn($token)
        ;

        $token->getAfterUrl()->willReturn('http://url-to-pay.com');

        $payment->setDetails(['payment-link' => 'http://url-to-pay.com'])->shouldBeCalled();
        $orderPaymentLinkSender->sendPaymentLink($order)->shouldBeCalled();

        $orderManager->flush()->shouldBeCalled();

        $this->setPaymentLink($event);
    }

    function it_throws_exception_if_event_subject_is_not_payment(GenericEvent $event)
    {
        $event->getSubject()->willReturn('badObject');

        $this
            ->shouldThrow(\InvalidArgumentException::class)
            ->during('setPaymentLink', [$event])
        ;
    }

    function it_does_nothing_if_order_has_no_new_payment(Payum $payum, GenericEvent $event, OrderInterface $order)
    {
        $event->getSubject()->willReturn($order);
        $order->getLastPayment(PaymentInterface::STATE_NEW)->willReturn(null);

        $payum->getTokenFactory()->shouldNotBeCalled();

        $this->setPaymentLink($event);
    }
}
