<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Element\Admin;

use Behat\Mink\Element\NodeElement;
use Behat\Mink\Session;
use Sylius\Component\Core\Model\Address;
use Sylius\Component\Core\Model\AddressInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Element\Element;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Service\AutoCompleteSelector;

class OrderCreateFormElement extends Element implements OrderCreateFormElementInterface
{
    /** @var AutoCompleteSelector */
    private $autoCompleteSelector;

    public function __construct(
        Session $session,
        array $parameters,
        AutoCompleteSelector $autoCompleteSelector
    ) {
        parent::__construct($session, $parameters);

        $this->autoCompleteSelector = $autoCompleteSelector;
    }

    public const TYPE_BILLING = 'billing';
    public const TYPE_SHIPPING = 'shipping';

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

    public function removeProduct(string $productCode): void
    {
        $item = $this->getItemWithProductSelected($productCode);
        $item->focus();

        $item->clickLink('Delete');
    }

    public function hasProductWithQuantity(string $productCode, int $quantity): bool
    {
        $item = $this->getItemWithProductSelected($productCode);

        return (int) $item->find('css', '.item-quantity')->getValue() === $quantity;
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

    public function getAvailableShippingMethods(): array
    {
        $this->clickOnTabAndWait('Shipments & Payments');

        $shipmentsCollection = $this->getDocument()->find('css', '#sylius_admin_order_creation_new_order_shipments');

        if (count($shipmentsCollection->findAll('css', '[data-form-collection="item"]')) === 0) {
            $shipmentsCollection->clickLink('Add');
        }

        $this->waitForFormToLoad();

        $shippingMethods = $this->getDocument()->findAll('css', sprintf(
            '#sylius_admin_order_creation_new_order_shipments [data-form-collection="item"]:last-child select option'
        ));

        $shippingMethods = array_map(function(NodeElement $option) : string {
            return $option->getText();
        }, $shippingMethods);

        return $shippingMethods;
    }

    public function selectShippingMethod(string $shippingMethodName): void
    {
        $this->clickOnTabAndWait('Shipments & Payments');

        $shipmentsCollection = $this->getDocument()->find('css', '#sylius_admin_order_creation_new_order_shipments');

        $shipmentsCollection->clickLink('Add');

        $this->waitForFormToLoad();

        $this->getDocument()->waitFor(1, function () use ($shipmentsCollection) {
            return $shipmentsCollection->has('css', '[data-form-collection="item"]');
        });

        $shipmentsCollection->selectFieldOption('Shipping Method', $shippingMethodName);
    }

    public function selectPaymentMethod(string $paymentMethodName): void
    {
        $this->clickOnTabAndWait('Shipments & Payments');

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

    public function specifyUnitPrice(string $itemProductCode, string $unitPrice): void
    {
        $item = $this->getItemWithProductSelected($itemProductCode);

        $item->fillField('Unit price', $unitPrice);
    }

    public function specifyQuantity(string $itemProductCode, int $quantity): void
    {
        $item = $this->getItemWithProductSelected($itemProductCode);

        $item->fillField('Quantity', $quantity);
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

    public function hasUnitPriceValidationMessage(string $productCode, string $message): bool
    {
        $item = $this->getItemWithProductSelected($productCode);

        return null !== $item->find('css', sprintf('.sylius-validation-error:contains("%s")', $message));
    }

    public function getPreFilledBillingAddress(): AddressInterface
    {
        return $this->getPreFilledAddress(self::TYPE_BILLING);
    }

    public function getPreFilledShippingAddress(): AddressInterface
    {
        return $this->getPreFilledAddress(self::TYPE_SHIPPING);
    }

    public function getShippingMethodName(): string
    {
        return $this->getElement('selected_shipping_method')->getText();
    }

    public function getPaymentMethodName(): string
    {
        return $this->getElement('selected_payment_method')->getText();
    }

    protected function getDefinedElements(): array
    {
        return array_merge(parent::getDefinedElements(), [
            'billing_city' => '#sylius_admin_order_creation_new_order_billingAddress_city',
            'billing_country' => '#sylius_admin_order_creation_new_order_billingAddress_countryCode',
            'billing_first_name' => '#sylius_admin_order_creation_new_order_billingAddress_firstName',
            'billing_last_name' => '#sylius_admin_order_creation_new_order_billingAddress_lastName',
            'billing_street' => '#sylius_admin_order_creation_new_order_billingAddress_street',
            'billing_postcode' => '#sylius_admin_order_creation_new_order_billingAddress_postcode',
            'selected_payment_method' => '#sylius_admin_order_creation_new_order_payments_0_method option[selected="selected"]',
            'selected_shipping_method' => '#sylius_admin_order_creation_new_order_shipments_0_method option[selected="selected"]',
            'shipping_city' => '#sylius_admin_order_creation_new_order_shippingAddress_city',
            'shipping_country' => '#sylius_admin_order_creation_new_order_shippingAddress_countryCode',
            'shipping_first_name' => '#sylius_admin_order_creation_new_order_shippingAddress_firstName',
            'shipping_last_name' => '#sylius_admin_order_creation_new_order_shippingAddress_lastName',
            'shipping_postcode' => '#sylius_admin_order_creation_new_order_shippingAddress_postcode',
            'shipping_street' => '#sylius_admin_order_creation_new_order_shippingAddress_street',
        ]);
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

    private function getItemWithProductSelected(string $productCode): NodeElement
    {
        /** @var NodeElement $item */
        foreach ($this->getDocument()->findAll('css', '#items [data-form-collection="item"]') as $item) {
            $selectedProduct = $item->find('css', '.sylius-autocomplete .text')->getText();

            if (strpos($selectedProduct, $productCode) !== false) {
                return $item;
            }
        }

        throw new \Exception(sprintf('There is no item with product with code "%s" selected', $productCode));
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

    private function getPreFilledAddress(string $type): AddressInterface
    {
        $address = new Address();

        $address->setFirstName($this->getElement(sprintf('%s_first_name', $type))->getValue());
        $address->setLastName($this->getElement(sprintf('%s_last_name', $type))->getValue());
        $address->setStreet($this->getElement(sprintf('%s_street', $type))->getValue());
        $address->setCountryCode($this->getElement(sprintf('%s_country', $type))->getValue());
        $address->setCity($this->getElement(sprintf('%s_city', $type))->getValue());
        $address->setPostcode($this->getElement(sprintf('%s_postcode', $type))->getValue());

        return $address;
    }

    private function waitForFormToLoad(): void
    {
        $form = $this->getDocument()->find('css', 'form');
        $this->getDocument()->waitFor(1, function () use ($form) {
            return $form->hasClass('loading');
        });
    }
}
