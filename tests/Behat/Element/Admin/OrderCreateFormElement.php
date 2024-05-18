<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Element\Admin;

use ArrayAccess;
use Behat\Mink\Element\NodeElement;
use Behat\Mink\Exception\Exception;
use Behat\Mink\Session;
use Sylius\Component\Core\Model\AddressInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Element\Element;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Service\AutoCompleteSelector;

class OrderCreateFormElement extends Element implements OrderCreateFormElementInterface
{
    public const TYPE_BILLING = 'billing';

    public const TYPE_SHIPPING = 'shipping';

    public function __construct(
        Session $session,
        ArrayAccess $parameters,
        private AutoCompleteSelector $autoCompleteSelector,
    ) {
        parent::__construct($session, $parameters);
    }

    public function addProduct(string $productVariantDescriptor): void
    {
        $this->clickOnTabAndWait('Items');
        $item = $this->addItemAndWaitForIt();

        $this->autoCompleteSelector->selectOption($item, $productVariantDescriptor);
    }

    public function addMultipleProducts(string $productVariantDescriptor, int $quantity): void
    {
        $this->clickOnTabAndWait('Items');

        $item = $this->addItemAndWaitForIt();

        $this->autoCompleteSelector->selectOption($item, $productVariantDescriptor);
        $item->fillField('Quantity', (string) $quantity);
    }

    public function removeProduct(string $productVariantDescriptor): void
    {
        $item = $this->getItemWithProductSelected($productVariantDescriptor);
        $item->focus();

        $item->clickLink('Delete');
    }

    public function areProductsVisible(): bool
    {
        $this->clickOnTabAndWait('Items');

        $item = $this->addItemAndWaitForIt();

        return $this->autoCompleteSelector->areItemsVisible($item);
    }

    public function specifyShippingAddress(AddressInterface $address): void
    {
        $this->clickOnTabAndWait('Shipping address & Billing address');

        /** @var NodeElement $addressForm */
        $addressForm = $this->getDocument()->find('css', 'div[id*="shippingAddress"]');
        $this->fillAddressData(
            $addressForm,
            $address,
        );
    }

    public function specifyBillingAddress(AddressInterface $address): void
    {
        /** @var NodeElement $addressForm */
        $addressForm = $this->getDocument()->find('css', 'div[id*="billingAddress"]');
        $this->fillAddressData(
            $addressForm,
            $address,
        );
    }

    public function getAvailableShippingMethods(): array
    {
        $this->clickOnTabAndWait('Shipments & Payments');

        /** @var NodeElement $shipmentsCollection */
        $shipmentsCollection = $this->getDocument()->find('css', '#sylius_admin_order_creation_new_order_shipments');

        if (count($shipmentsCollection->findAll('css', '[data-form-collection="item"]')) === 0) {
            $shipmentsCollection->clickLink('Add');
        }

        $this->waitForFormToLoad();

        $shippingMethods = $this->getDocument()->findAll(
            'css',
            '#sylius_admin_order_creation_new_order_shipments [data-form-collection="item"]:last-child select option',
        );

        return array_map(static function (NodeElement $option): string {
            return $option->getText();
        }, $shippingMethods);
    }

    public function moveToShippingAndPaymentsSection(): void
    {
        $this->clickOnTabAndWait('Shipments & Payments');
    }

    public function selectShippingMethod(string $shippingMethodName): void
    {
        $this->selectMethod('shipments', 'Shipping Method', $shippingMethodName, true);
    }

    public function changeShippingMethod(string $shippingMethodName): void
    {
        $this->selectMethod('shipments', 'Shipping Method', $shippingMethodName, false);
    }

    public function selectPaymentMethod(string $paymentMethodName): void
    {
        $this->selectMethod('payments', 'Payment Method', $paymentMethodName, true);
    }

    public function changePaymentMethod(string $paymentMethodName): void
    {
        $this->selectMethod('payments', 'Payment Method', $paymentMethodName, false);
    }

    public function specifyQuantity(string $productVariantDescriptor, int $quantity): void
    {
        $item = $this->getItemWithProductSelected($productVariantDescriptor);

        $item->fillField('Quantity', (string) $quantity);
    }

    public function placeOrder(): void
    {
        $this->getDocument()->waitFor(10, function () {
            try {
                $this->getDocument()->pressButton('Create');

                return true;
            } catch (Exception $exception) {
                return false;
            }
        });
    }

    public function selectLocale(string $localeName): void
    {
        $this->clickOnTabAndWait('Locale & Currency');

        $this->getElement('locale')->selectOption($localeName);
    }

    public function selectCurrency(string $currencyName): void
    {
        $this->clickOnTabAndWait('Locale & Currency');

        $this->getElement('currency')->selectOption($currencyName);
    }

    public function getShippingMethodsValidationMessage(): string
    {
        /** @var NodeElement $invalidMessage */
        $invalidMessage = $this->getDocument()->find('css', '#shipmentsAndPayments .invalid-data-message');

        return $invalidMessage->getText();
    }

    protected function getDefinedElements(): array
    {
        return array_merge(parent::getDefinedElements(), [
            'billing_city' => '#sylius_admin_order_creation_new_order_billingAddress_city',
            'billing_country' => '#sylius_admin_order_creation_new_order_billingAddress_countryCode',
            'billing_first_name' => '#sylius_admin_order_creation_new_order_billingAddress_firstName',
            'billing_last_name' => '#sylius_admin_order_creation_new_order_billingAddress_lastName',
            'billing_postcode' => '#sylius_admin_order_creation_new_order_billingAddress_postcode',
            'billing_street' => '#sylius_admin_order_creation_new_order_billingAddress_street',
            'currency' => '#sylius_admin_order_creation_new_order_currencyCode',
            'locale' => '#sylius_admin_order_creation_new_order_localeCode',
            'payments' => '#sylius_admin_order_creation_new_order_payments',
            'shipments' => '#sylius_admin_order_creation_new_order_shipments',
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

    private function selectMethod(string $type, string $field, string $name, bool $addNew): void
    {
        $this->clickOnTabAndWait('Shipments & Payments');
        $this->waitForFormToLoad();

        $collection = $this->getElement($type);

        if ($addNew) {
            $this->getDocument()->waitFor(10, function () use ($collection) {
                try {
                    $collection->clickLink('Add');

                    return true;
                } catch (Exception $exception) {
                    return false;
                }
            });
            $this->waitForFormToLoad();
        }

        $this->getDocument()->waitFor(1, function () use ($collection) {
            return $collection->has('css', '[data-form-collection="item"]');
        });

        $collection->selectFieldOption($field, $name);
    }

    private function addItemAndWaitForIt(): NodeElement
    {
        $itemsCount = $this->countItems();
        $this->getDocument()->waitFor(10, function () {
            try {
                $this->getDocument()->clickLink('Add');

                return true;
            } catch (Exception $exception) {
                return false;
            }
        });

        $this->getDocument()->waitFor(1, function () use ($itemsCount) {
            return $this->countItems() > $itemsCount;
        });

        /** @var NodeElement $lastItem */
        $lastItem = $this->getDocument()->find('css', '#items [data-form-collection="item"]:last-child');

        return $lastItem;
    }

    private function countItems(): int
    {
        return count($this->getDocument()->findAll('css', '#items [data-form-collection="item"]'));
    }

    private function getItemWithProductSelected(string $productVariantDescriptor): NodeElement
    {
        foreach ($this->getDocument()->findAll('css', '#items [data-form-collection="item"]') as $item) {
            /** @var NodeElement $autocompleteText */
            $autocompleteText = $item->find('css', '.sylius-autocomplete .text');
            $selectedProduct = $autocompleteText->getText();

            if (str_contains($selectedProduct, $productVariantDescriptor)) {
                return $item;
            }
        }

        throw new \InvalidArgumentException(sprintf('There is no item with product with descriptor "%s" selected', $productVariantDescriptor));
    }

    private function clickOnTabAndWait(string $tabName): void
    {
        /** @var NodeElement $tab */
        $tab = $this->getDocument()->find('css', sprintf('.title:contains("%s")', $tabName));

        if ($tab->hasClass('active')) {
            return;
        }

        $tab->click();

        $this->getDocument()->waitFor(5, function () use ($tabName) {
            /** @var NodeElement $title */
            $title = $this->getDocument()->find('css', sprintf('.title:contains("%s") + .content', $tabName));

            return $title->hasClass('active');
        });
    }

    private function waitForFormToLoad(): void
    {
        /** @var NodeElement $form */
        $form = $this->getDocument()->find('css', '[name="sylius_admin_order_creation_new_order"]');
        $this->getDocument()->waitFor(1000, function () use ($form) {
            return !$form->hasClass('loading');
        });
    }

    public function isAddPaymentButtonVisible(): bool
    {
        /** @var NodeElement $paymentButton */
        $paymentButton = $this->getElement('payments')->find('css', '[data-form-collection="add"]');

        return $paymentButton->isVisible();
    }
}
