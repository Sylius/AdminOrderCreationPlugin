<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Entity;

use Sylius\Component\Core\Model\OrderItemInterface as BaseOrderItemInterface;

interface OrderItemInterface extends BaseOrderItemInterface
{
    public function getCustomUnitPrice(): ?int;

    public function setCustomUnitPrice(?int $customUnitPrice): void;
}
