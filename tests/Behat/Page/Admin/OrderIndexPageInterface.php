<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Sylius\Behat\Page\Admin\Order\IndexPageInterface;

interface OrderIndexPageInterface extends IndexPageInterface
{
    public function createOrder(): void;

    public function countOrders(array $parameters): int;
}
