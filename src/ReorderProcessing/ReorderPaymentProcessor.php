<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\ReorderProcessing;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\PaymentInterface;
use Sylius\Component\Payment\Factory\PaymentFactoryInterface;

final class ReorderPaymentProcessor implements ReorderProcessor
{
    /** @var PaymentFactoryInterface */
    private $paymentFactory;

    public function __construct(PaymentFactoryInterface $paymentFactory)
    {
        $this->paymentFactory = $paymentFactory;
    }

    public function process(OrderInterface $order, OrderInterface $reorder): void
    {
        if (!$order->hasPayments()) {
            return;
        }

        /** @var PaymentInterface $payment */
        foreach ($order->getPayments() as $payment) {
            if (
                PaymentInterface::STATE_CANCELLED === $payment->getState() ||
                PaymentInterface::STATE_FAILED === $payment->getState()
            ) {
                continue;
            }

            /** @var PaymentInterface $newPayment */
            $newPayment = $this->paymentFactory->createNew();
            $newPayment->setOrder($reorder);
            $newPayment->setMethod($payment->getMethod());

            $reorder->addPayment($newPayment);
        }
    }
}
