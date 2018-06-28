<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\ReorderProcessing;

use Sylius\Component\Core\Model\AddressInterface;
use Sylius\Component\Core\Model\OrderInterface;

final class ReorderDataProcessor implements ReorderProcessor
{
    public function process(OrderInterface $order, OrderInterface $reorder): void
    {
        $reorder->setChannel($order->getChannel());
        $reorder->setCustomer($order->getCustomer());
        $reorder->setCurrencyCode($order->getCurrencyCode());
        $reorder->setLocaleCode($order->getLocaleCode());
        $reorder->setNotes($order->getNotes());

        /** @var AddressInterface $billingAddress */
        $billingAddress = $order->getBillingAddress();
        $reorder->setBillingAddress(clone $billingAddress);

        /** @var AddressInterface $shippingAddress */
        $shippingAddress = $order->getShippingAddress();
        $reorder->setShippingAddress(clone $shippingAddress);
    }
}
