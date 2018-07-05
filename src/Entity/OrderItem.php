<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Entity;

use Sylius\Component\Core\Model\OrderItem as BaseItemOrder;

class OrderItem extends BaseItemOrder implements OrderItemInterface
{
    /** @var int|null */
    private $customUnitPrice;

    public function getCustomUnitPrice(): ?int
    {
        return $this->customUnitPrice;
    }

    public function setCustomUnitPrice(?int $customUnitPrice): void
    {
        $this->customUnitPrice = $customUnitPrice;
    }
}
