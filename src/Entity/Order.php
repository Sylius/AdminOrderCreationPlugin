<?php

namespace Sylius\AdminOrderCreationPlugin\Entity;

use Sylius\Component\Core\Model\Order as BaseOrder;

class Order extends BaseOrder implements OrderInterface
{
    /** @var int|null */
    private $customTotal;

    public function getCustomTotal(): ?int
    {
        return $this->customTotal;
    }

    public function setCustomTotal(?int $customTotal): void
    {
        $this->customTotal = $customTotal;
    }

    public function getTotal(): int
    {
        if (null !== $this->customTotal) {
            return $this->customTotal;
        }

        return parent::getTotal();
    }
}
