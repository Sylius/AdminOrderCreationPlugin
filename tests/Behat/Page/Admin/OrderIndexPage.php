<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Sylius\Behat\Page\Admin\Order\IndexPage;

final class OrderIndexPage extends IndexPage implements OrderIndexPageInterface
{
    public function createOrder(): void
    {
        $this->getDocument()->pressButton('Create');
    }
}
