<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Behat\Mink\Element\NodeElement;
use Sylius\Behat\Page\Admin\Crud\CreatePage;
use Sylius\Component\Core\Model\AddressInterface;

final class OrderCreatePage extends CreatePage implements OrderCreatePageInterface
{
    public function addProduct(string $productName): void
    {
        $this->getDocument()->clickLink('Add');

        $item = $this->getLastOrderItem();
        $item->selectFieldOption('Variant', $productName);
    }

    public function addMultipleProducts(string $productName, int $quantity): void
    {
        $itemsCount = $this->countItems();
        $this->getDocument()->clickLink('Add');

        $this->getDocument()->waitFor(1, function () use ($itemsCount) {
            return $this->countItems() > $itemsCount;
        });

        $item = $this->getLastOrderItem();
        $item->selectFieldOption('Variant', $productName);
        $item->fillField('Quantity', $quantity);
    }

    public function specifyShippingAddress(AddressInterface $address): void
    {
        $this->fillAddressData(
            $this->getDocument()->find('css', 'div[id*="shippingAddress"]'),
            $address
        );
    }

    public function selectShippingMethod(string $shippingMethodName): void
    {
        $shipmentsCollection = $this->getDocument()->find('css', '#sylius_admin_order_creation_new_order_shipments');

        $shipmentsCollection->clickLink('Add');
        $this->getDocument()->waitFor(1, function () use ($shipmentsCollection) {
            return $shipmentsCollection->has('css', '[data-form-collection="item"]');
        });

        $shipmentsCollection->selectFieldOption('Shipping Method', $shippingMethodName);
    }

    public function selectPaymentMethod(string $paymentMethodName): void
    {
        $paymentsCollection = $this->getDocument()->find('css', '#sylius_admin_order_creation_new_order_payments');

        $paymentsCollection->clickLink('Add');
        $this->getDocument()->waitFor(1, function () use ($paymentsCollection) {
            return $paymentsCollection->has('css', '[data-form-collection="item"]');
        });

        $paymentsCollection->selectFieldOption('Payment Method', $paymentMethodName);
    }

    public function placeOrder(): void
    {
        $this->getDocument()->pressButton('Create');
    }

    private function fillAddressData(NodeElement $addressForm, AddressInterface $address): void
    {
        $addressForm->fillField('First name', $address->getFirstName());
        $addressForm->fillField('Last name', $address->getLastName());
        $addressForm->fillField('Street', $address->getStreet());
        $addressForm->fillField('Country', $address->getCountryCode());
        $addressForm->fillField('City', $address->getCity());
        $addressForm->fillField('Postcode', $address->getPostcode());
    }

    private function countItems(): int
    {
        return count($this->getDocument()->findAll('css', '#items [data-form-collection="item"]'));
    }

    private function getLastOrderItem(): NodeElement
    {
        return $this->getDocument()->find('css', '#items [data-form-collection="item"]:last-child');
    }
}
