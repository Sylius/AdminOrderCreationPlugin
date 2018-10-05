<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Factory;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

interface OrderFactoryInterface extends FactoryInterface
{
    public function createForCustomerAndChannel(string $customerId, string $channelCode): OrderInterface;

    public function createFromExistingOrder(OrderInterface $order): OrderInterface;
}
