<?php

namespace Sylius\AdminOrderCreationPlugin\EventListener;

use Doctrine\Common\Persistence\ObjectManager;
use Payum\Core\Model\GatewayConfigInterface;
use Payum\Core\Payum;
use Payum\Core\Security\GenericTokenFactoryInterface;
use Payum\Core\Security\TokenInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Webmozart\Assert\Assert;

final class PaymentLinkCreationListener
{
    /** @var Payum */
    private $payum;

    /** @var string */
    private $afterPayRoute;

    /** @var ObjectManager */
    private $orderManager;

    public function __construct(Payum $payum, ObjectManager $orderManager, string $afterPayRoute)
    {
        $this->payum = $payum;
        $this->orderManager = $orderManager;
        $this->afterPayRoute = $afterPayRoute;
    }

    public function setPaymentLink(GenericEvent $event): void
    {
        /** @var OrderInterface $order */
        $order = $event->getSubject();
        Assert::isInstanceOf($order, OrderInterface::class);

        $payment = $order->getLastPayment(PaymentInterface::STATE_NEW);
        if (null === $payment) {
            return;
        }

        $token = $this->getPaymentToken($payment, $this->payum->getTokenFactory());

        $payment->setDetails(['payment-link' => $token->getAfterUrl()]);
        $this->orderManager->flush();
    }

    private function getPaymentToken(PaymentInterface $payment, GenericTokenFactoryInterface $tokenFactory): TokenInterface
    {
        /** @var GatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $payment->getMethod()->getGatewayConfig();

        if (isset($gatewayConfig->getConfig()['use_authorize']) && $gatewayConfig->getConfig()['use_authorize'] === true) {
            return $tokenFactory->createAuthorizeToken(
                $gatewayConfig->getGatewayName(), $payment, $this->afterPayRoute
            );
        }

        return $tokenFactory->createCaptureToken(
            $gatewayConfig->getGatewayName(), $payment, $this->afterPayRoute
        );
    }
}
