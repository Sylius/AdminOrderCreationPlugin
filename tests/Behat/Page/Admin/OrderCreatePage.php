<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Behat\Mink\Element\NodeElement;
use Behat\Mink\Session;
use Sylius\Behat\Page\Admin\Crud\CreatePage;
use Sylius\Component\Core\Model\AddressInterface;
use Symfony\Component\Routing\RouterInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Service\AutoCompleteSelector;

final class OrderCreatePage extends CreatePage implements OrderCreatePageInterface
{
    /** @var AutoCompleteSelector */
    private $autoCompleteSelector;

    public function __construct(
        Session $session,
        array $parameters,
        RouterInterface $router,
        string $routeName,
        AutoCompleteSelector $autoCompleteSelector
    ) {
        parent::__construct($session, $parameters, $router, $routeName);

        $this->autoCompleteSelector = $autoCompleteSelector;
    }

    public function addProduct(string $productName): void
    {
        $this->clickOnTabAndWait('Items');
        $item = $this->addItemAndWaitForIt();

        $this->autoCompleteSelector->selectOption($item, $productName);
    }

    public function addMultipleProducts(string $productName, int $quantity): void
    {
        $this->clickOnTabAndWait('Items');

        $item = $this->addItemAndWaitForIt();

        $this->autoCompleteSelector->selectOption($item, $productName);
        $item->fillField('Quantity', $quantity);
    }

    public function removeProduct(string $productName): void
    {
        $item = $this->getItemWithProductSelected($productName);
        $item->focus();

        $item->clickLink('Delete');
    }

    public function specifyShippingAddress(AddressInterface $address): void
    {
        $this->clickOnTabAndWait('Shipping address & Billing address');

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
        $this->clickOnTabAndWait('Shipments & Payments');

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
        $this->clickOnTabAndWait('Custom total');

        $this->getDocument()->fillField('Order price', $orderPrice);
    }

    public function specifyUnitPrice(string $itemProductName, string $unitPrice): void
    {
        $item = $this->getItemWithProductSelected($itemProductName);

        $item->fillField('Unit price', $unitPrice);
    }

    public function placeOrder(): void
    {
        $this->getDocument()->pressButton('Create');
    }

    public function hasOrderPriceValidationMessage(string $message): bool
    {
        $this->clickOnTabAndWait('Custom total');

        $customTotalElement = $this->getDocument()->find('css', '.field:contains("Order price")');

        return null !== $customTotalElement->find('css', sprintf('.sylius-validation-error:contains("%s")', $message));
    }

    public function hasUnitPriceValidationMessage(string $productName, string $message): bool
    {
        $item = $this->getItemWithProductSelected($productName);

        return null !== $item->find('css', sprintf('.sylius-validation-error:contains("%s")', $message));
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

        $this->getDocument()->waitFor(1, function () use ($itemsCount) {
            return $this->countItems() > $itemsCount;
        });

        return $this->getDocument()->find('css', '#items [data-form-collection="item"]:last-child');
    }

    private function countItems(): int
    {
        return count($this->getDocument()->findAll('css', '#items [data-form-collection="item"]'));
    }

    private function getItemWithProductSelected(string $productName): NodeElement
    {
        /** @var NodeElement $item */
        foreach ($this->getDocument()->findAll('css', '#items [data-form-collection="item"]') as $item) {
            $selectedProduct = $item->find('css', '.sylius-autocomplete .text')->getText();

            if (strpos($selectedProduct, $productName) !== false) {
                return $item;
            }
        }

        throw new \Exception(sprintf('There is no item with product with name "%d" selected', $productName));
    }

    private function clickOnTabAndWait(string $tabName): void
    {
        $tab = $this->getDocument()->find('css', sprintf('.title:contains("%s")', $tabName));

        if ($tab->hasClass('active')) {
            return;
        }

        $tab->click();

        $this->getDocument()->waitFor(1, function () use ($tabName) {
            return $this
                ->getDocument()
                ->find('css', sprintf('.title:contains("%s") + .content', $tabName))
                ->hasClass('active')
            ;
        });
    }
}
