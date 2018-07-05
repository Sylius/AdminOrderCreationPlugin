<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\Provider;

use Payum\Core\Model\GatewayConfigInterface;
use Payum\Core\Payum;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;
use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Provider\PaymentTokenProviderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;

final class PaymentTokenProviderSpec extends ObjectBehavior
{
    function let(Payum $payum)
    {
        $this->beConstructedWith($payum, 'sylius_shop_order_after_pay');
    }

    function it_implements_payment_token_provider_interface()
    {
        $this->shouldImplement(PaymentTokenProviderInterface::class);
    }

    function it_provides_authorize_token_for_payment_if_it_requires_authorization(
        Payum $payum,
        GenericTokenFactoryInterface $tokenFactory,
        PaymentInterface $payment,
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig,
        TokenInterface $token
    ) {
        $payum->getTokenFactory()->willReturn($tokenFactory);

        $payment->getMethod()->willReturn($paymentMethod);
        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);

        $gatewayConfig->getConfig()->willReturn(['use_authorize' => true]);
        $gatewayConfig->getGatewayName()->willReturn('PAYPAL');

        $tokenFactory
            ->createAuthorizeToken('PAYPAL', $payment, 'sylius_shop_order_after_pay')
            ->willReturn($token)
        ;

        $this->getPaymentToken($payment)->shouldReturn($token);
    }

    function it_provides_capture_token_for_payment(
        Payum $payum,
        GenericTokenFactoryInterface $tokenFactory,
        PaymentInterface $payment,
        PaymentMethodInterface $paymentMethod,
        GatewayConfigInterface $gatewayConfig,
        TokenInterface $token
    ) {
        $payum->getTokenFactory()->willReturn($tokenFactory);

        $payment->getMethod()->willReturn($paymentMethod);
        $paymentMethod->getGatewayConfig()->willReturn($gatewayConfig);

        $gatewayConfig->getConfig()->willReturn(['use_authorize' => false]);
        $gatewayConfig->getGatewayName()->willReturn('PAYPAL');

        $tokenFactory
            ->createCaptureToken('PAYPAL', $payment, 'sylius_shop_order_after_pay')
            ->willReturn($token)
        ;

        $this->getPaymentToken($payment)->shouldReturn($token);
    }
}
