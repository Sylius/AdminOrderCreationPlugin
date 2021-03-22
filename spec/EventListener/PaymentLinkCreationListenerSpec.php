<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\EventListener;

use Doctrine\Persistence\ObjectManager;
use Payum\Core\Model\GatewayConfigInterface;
use Payum\Core\Payum;
use Payum\Core\Security\TokenInterface;
use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Provider\PaymentTokenProviderInterface;
use Sylius\AdminOrderCreationPlugin\Sender\OrderPaymentLinkSenderInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\EventDispatcher\GenericEvent;

final class PaymentLinkCreationListenerSpec extends ObjectBehavior
{
    function let(
        PaymentTokenProviderInterface $paymentTokenProvider,
        ObjectManager $orderManager,
        OrderPaymentLinkSenderInterface $orderPaymentLinkSender
    ) {
        $this->beConstructedWith($paymentTokenProvider, $orderManager, $orderPaymentLinkSender);
    }

    function it_sets_after_url_from_token_of_last_order_new_payment_and_sends_it(
        PaymentTokenProviderInterface $paymentTokenProvider,
        ObjectManager $orderManager,
        OrderPaymentLinkSenderInterface $orderPaymentLinkSender,
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
        $gatewayConfig->getGatewayName()->willReturn('paypal_express_checkout');

        $paymentTokenProvider->getPaymentToken($payment)->willReturn($token);
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

    function it_does_nothing_if_order_payment_gateway_is_offline(
        Payum $payum,
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
        $gatewayConfig->getGatewayName()->willReturn('offline');

        $payum->getTokenFactory()->shouldNotBeCalled();

        $this->setPaymentLink($event);
    }
}
