<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use FriendsOfBehat\PageObjectExtension\Page\SymfonyPage;

class NewOrderCreatePage extends SymfonyPage implements NewOrderCreatePageInterface
{
    public function getRouteName(): string
    {
        return 'sylius_admin_order_creation_order_create';
    }

    public function isShippingAddressAutocompleteField(): bool
    {
        $shippingAddressBook = $this->getDocument()->find('css','.shipping-address-book');

        return null !== $shippingAddressBook;
    }

    public function isBillingAddressAutocompleteField(): bool
    {
        
        $billingAddressBook = $this->getDocument()->find('css','.billing-address-book');

        return null !== $billingAddressBook;
    }

    public function selectShippingAddress(array $name): void
    {
        $shippingAddressBook = $this->getDocument()->find('css','.shipping-address-book');
        $shippingAddressBook->find('css', sprintf('[data-first-name="%s"]', $name[0]))->click();
    }

    public function selectBillingAddress(array $name): void
    {
        $billingAddressBook = $this->getDocument()->find('css','.billing-address-book');
        $billingAddressBook->find('css', sprintf('[data-first-name="%s"]', $name[0]))->click();
    }
}
