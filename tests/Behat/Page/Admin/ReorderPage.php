<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Sylius\Behat\Page\SymfonyPage;

final class ReorderPage extends SymfonyPage implements ReorderPageInterface
{
    public function getRouteName(): string
    {
        return 'sylius_admin_order_creation_reorder';
    }
}
