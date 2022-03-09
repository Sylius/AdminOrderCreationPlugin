<?php

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

interface NewOrderCreatePageInterface
{
    public function getRouteName(): string;

    public function isShippingAddressAutocompleteField(): bool;

    public function isBillingAddressAutocompleteField(): bool;

    public function selectShippingAddress(array $name): void;

    public function selectBillingAddress(array $name): void;
}
