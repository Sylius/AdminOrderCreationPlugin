<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\EventListener;

use Doctrine\Common\Persistence\ObjectManager;
use Payum\Core\Model\GatewayConfigInterface;
use Sylius\AdminOrderCreationPlugin\Provider\PaymentTokenProviderInterface;
use Sylius\AdminOrderCreationPlugin\Sender\OrderPaymentLinkSenderInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Core\Model\PaymentMethodInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use Webmozart\Assert\Assert;

final class PaymentLinkCreationListener
{
    /** @var PaymentTokenProviderInterface */
    private $paymentTokenProvider;

    /** @var ObjectManager */
    private $orderManager;

    /** @var OrderPaymentLinkSenderInterface */
    private $orderPaymentLinkSender;

    public function __construct(
        PaymentTokenProviderInterface $paymentTokenProvider,
        ObjectManager $orderManager,
        OrderPaymentLinkSenderInterface $orderPaymentLinkSender
    ) {
        $this->paymentTokenProvider = $paymentTokenProvider;
        $this->orderManager = $orderManager;
        $this->orderPaymentLinkSender = $orderPaymentLinkSender;
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

        /** @var PaymentMethodInterface $paymentMethod */
        $paymentMethod = $payment->getMethod();
        /** @var GatewayConfigInterface $gatewayConfig */
        $gatewayConfig = $paymentMethod->getGatewayConfig();

        if ('Offline' === $gatewayConfig->getGatewayName()) {
            return;
        }

        $token = $this->paymentTokenProvider->getPaymentToken($payment);
        $payment->setDetails(['payment-link' => $token->getAfterUrl()]);

        $this->orderPaymentLinkSender->sendPaymentLink($order);
        $this->orderManager->flush();
    }
}
