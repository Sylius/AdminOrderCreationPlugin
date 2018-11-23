<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use FriendsOfBehat\PageObjectExtension\Page\SymfonyPage;

final class ReorderPage extends SymfonyPage implements ReorderPageInterface
{
    public function getRouteName(): string
    {
        return 'sylius_admin_order_creation_reorder';
    }
}
