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
        $item = $this->addItemAndWaitForIt();
        $item->selectFieldOption('Variant', $productName);
    }

    public function addMultipleProducts(string $productName, int $quantity): void
    {
        $item = $this->addItemAndWaitForIt();
        $item->selectFieldOption('Variant', $productName);
        $item->fillField('Quantity', $quantity);
    }

    public function removeProduct(int $productId): void
    {
        $item = $this->getItemWithProductSelected($productId);
        $item->clickLink('Delete');
    }

    public function specifyShippingAddress(AddressInterface $address): void
    {
        $this->fillAddressData(
            $this->getDocument()->find('css', 'div[id*="shippingAddress"]'),
            $address
        );
    }

    public function specifyBillingAddress(AddressInterface $address): void
    {
        $this->fillAddressData(
            $this->getDocument()->find('css', 'div[id*="billingAddress"]'),
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

    public function specifyOrderPrice(string $orderPrice): void
    {
        $this->getDocument()->fillField('Order price', $orderPrice);
    }

    public function placeOrder(): void
    {
        $this->getDocument()->pressButton('Create');
    }

    public function hasOrderPriceValidationMessage(string $message): bool
    {
        $customTotalElement = $this->getDocument()->find('css', '.field:contains("Order price")');
        $validationError = $customTotalElement->find('css', '.sylius-validation-error');

        if (null === $validationError) {
            return false;
        }

        return $validationError->getText() === $message;
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

    private function addItemAndWaitForIt(): NodeElement
    {
        $itemsCount = $this->countItems();
        $this->getDocument()->clickLink('Add');

        $this->getDocument()->waitFor(10, function () use ($itemsCount) {
            return $this->countItems() > $itemsCount;
        });

        return $this->getDocument()->find('css', '#items [data-form-collection="item"]:last-child');
    }

    private function countItems(): int
    {
        return count($this->getDocument()->findAll('css', '#items [data-form-collection="item"]'));
    }

    private function getItemWithProductSelected(int $productId): NodeElement
    {
        /** @var NodeElement $item */
        foreach ($this->getDocument()->findAll('css', '#items [data-form-collection="item"]') as $item) {
            if ((int) $item->find('css', 'select')->getValue() === $productId) {
                return $item;
            }
        }

        throw new \Exception(sprintf('There is no item with product with id "%d" selected', $productId));
    }
}
