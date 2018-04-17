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
        $this->getDocument()->selectFieldOption('Products', $productName);
        $this->getDocument()->pressButton('Add product');
    }

    public function specifyShippingAddress(AddressInterface $address): void
    {
        $this->fillAddressData(
            $this->getDocument()->find('css', '#shipping-address'),
            $address
        );
    }

    public function selectShippingMethod(string $shippingMethodName): void
    {
        $this->getDocument()->selectFieldOption('Shipping method', $shippingMethodName);
    }

    public function selectPaymentMethod(string $paymentMethodName): void
    {
        $this->getDocument()->selectFieldOption('Payment method', $paymentMethodName);
    }

    public function placeOrder(): void
    {
        $this->getDocument()->pressButton('Place order');
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
}
