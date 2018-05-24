<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Entity;

use Sylius\Component\Core\Model\OrderInterface as BaseOrderInterface;

interface OrderInterface extends BaseOrderInterface
{
    public function getCustomTotal(): ?int;

    public function setCustomTotal(?int $customTotal): void;
}
