<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Provider;

use Payum\Core\Model\GatewayConfigInterface;
use Payum\Core\Payum;
use Payum\Core\Security\TokenInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;

final class PaymentTokenProvider implements PaymentTokenProviderInterface
{
    /** @var Payum */
    private $payum;

    /** @var string */
    private $afterPayRoute;

    public function __construct(Payum $payum, string $afterPayRoute)
    {
        $this->payum = $payum;
        $this->afterPayRoute = $afterPayRoute;
    }

    public function getPaymentToken(PaymentInterface $payment): TokenInterface
    {
        $tokenFactory = $this->payum->getTokenFactory();

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();
        /** @var GatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $paymentMethod->getGatewayConfig();

        if (
            isset($gatewayConfig->getConfig()['use_authorize']) &&
            $gatewayConfig->getConfig()['use_authorize'] === true
        ) {
            return $tokenFactory->createAuthorizeToken(
                $gatewayConfig->getGatewayName(), $payment, $this->afterPayRoute
            );
        }

        return $tokenFactory->createCaptureToken(
            $gatewayConfig->getGatewayName(), $payment, $this->afterPayRoute
        );
    }
}
