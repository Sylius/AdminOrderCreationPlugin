<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Factory;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

interface OrderFactoryInterface extends FactoryInterface
{
    /**
     * Creates a new order for a given customer in a given channel.
     * 
     * @param string $customerId
     * @param string $channelCode
     */
    public function createForCustomerAndChannel(string $customerId, string $channelCode): OrderInterface;

    /**
     * Creates an order from an existing order and runs the reoder logic
     * 
     * @param OrderInterface $order
     */
    public function createFromExistingOrder(OrderInterface $order): OrderInterface;
}
