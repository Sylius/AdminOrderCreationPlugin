<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Sylius\Behat\Page\SymfonyPage;

final class NewOrderCustomerPage extends SymfonyPage implements NewOrderCustomerPageInterface
{
    public function getRouteName(): string
    {
        return 'sylius_admin_order_creation_select_order_customer';
    }

    public function selectCustomer(string $customerEmail): void
    {
        $this->getDocument()->selectFieldOption('Customer', $customerEmail);
    }

    public function next(): void
    {
        $this->getDocument()->pressButton('Next');
    }

    public function createCustomer(string $email): void
    {
        $this->getDocument()->fillField('New customer email', $email);
        $this->getDocument()->pressButton('Create new');
    }
}
