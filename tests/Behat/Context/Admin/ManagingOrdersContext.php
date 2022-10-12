<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Context\Admin;

use Behat\Behat\Context\Context;
use Sylius\Behat\NotificationType;
use Sylius\Behat\Service\NotificationCheckerInterface;
use Sylius\Component\Addressing\Comparator\AddressComparatorInterface;
use Sylius\Component\Core\Model\AddressInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Test\Services\EmailCheckerInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Element\Admin\OrderCreateFormElementInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\NewOrderCreatePageInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\NewOrderCustomerPageInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\OrderIndexPageInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\OrderPreviewPageInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\OrderShowPageInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\ReorderPageInterface;
use Webmozart\Assert\Assert;

final class ManagingOrdersContext implements Context
{
    /** @var OrderIndexPageInterface */
    private $orderIndexPage;

    /** @var NewOrderCustomerPageInterface */
    private $newOrderCustomerPage;

    /** @var OrderPreviewPageInterface */
    private $orderPreviewPage;

    /** @var OrderShowPageInterface */
    private $orderShowPage;

    /** @var ReorderPageInterface */
    private $reorderPage;

    /** @var OrderCreateFormElementInterface */
    private $orderCreateFormElement;

    /** @var NotificationCheckerInterface */
    private $notificationChecker;

    /** @var EmailCheckerInterface */
    private $emailChecker;

    /** @var AddressComparatorInterface */
    private $addressComparator;
    
    /** @var NewOrderCreatePageInterface */ 
    private $newOrderCreatePage;

    public function __construct(
        OrderIndexPageInterface $orderIndexPage,
        NewOrderCustomerPageInterface $newOrderCustomerPage,
        OrderPreviewPageInterface $orderPreviewPage,
        OrderShowPageInterface $orderShowPage,
        ReorderPageInterface $reorderPage,
        OrderCreateFormElementInterface $orderCreateFormElement,
        NotificationCheckerInterface $notificationChecker,
        EmailCheckerInterface $emailChecker,
        AddressComparatorInterface $addressComparator,
        NewOrderCreatePageInterface $newOrderCreatePage
    ) {
        $this->orderIndexPage = $orderIndexPage;
        $this->newOrderCustomerPage = $newOrderCustomerPage;
        $this->orderPreviewPage = $orderPreviewPage;
        $this->orderShowPage = $orderShowPage;
        $this->reorderPage = $reorderPage;
        $this->orderCreateFormElement = $orderCreateFormElement;
        $this->notificationChecker = $notificationChecker;
        $this->emailChecker = $emailChecker;
        $this->addressComparator = $addressComparator;
        $this->newOrderCreatePage = $newOrderCreatePage;
    }

    /**
     * @When I create a new order for :customer and channel :channelName
     */
    public function createNewOrderFor(CustomerInterface $customer, string $channelName): void
    {
        $this->orderIndexPage->open();
        $this->orderIndexPage->createOrder();

        $this->newOrderCustomerPage->selectChannel($channelName);

        $this->newOrderCustomerPage->selectCustomer($customer->getEmail());
        $this->newOrderCustomerPage->next();
    }

    /**
     * @When I create a new order for a new customer with email :email and channel :channelName
     */
    public function createNewOrderForNewCustomerWithEmailAndChannel(string $email, string $channelName): void
    {
        $this->orderIndexPage->open();
        $this->orderIndexPage->createOrder();

        $this->newOrderCustomerPage->selectChannel($channelName);
        $this->newOrderCustomerPage->createCustomer($email);
    }

    /**
     * @When I try to create a new order for an existing customer without selecting them
     */
    public function tryToCreateNewOrderForExistingCustomerWithoutSelectingThem(): void
    {
        $this->orderIndexPage->open();
        $this->orderIndexPage->createOrder();

        $this->newOrderCustomerPage->next();
    }

    /**
     * @When I try to create a new order for a new customer without email
     */
    public function tryToCreateNewOrderForNewCustomerWithoutEmail(): void
    {
        $this->orderIndexPage->open();
        $this->orderIndexPage->createOrder();

        $this->newOrderCustomerPage->createCustomer('');
    }

    /**
     * @When I add :product to this order
     */
    public function addProductToThisOrder(ProductInterface $product): void
    {
        $this->orderCreateFormElement->addProduct($product->getVariants()->first()->getDescriptor());
    }

    /**
     * @When I add :quantity of :product to this order
     */
    public function addMultipleProductsToThisOrder(int $quantity, ProductInterface $product): void
    {
        $this->orderCreateFormElement->addMultipleProducts($product->getVariants()->first()->getDescriptor(), $quantity);
    }

    /**
     * @When I remove :product from this order
     */
    public function removeProductFromThisOrder(ProductInterface $product): void
    {
        try {
            $this->orderCreateFormElement->removeProduct($product->getVariants()->first()->getDescriptor());
        } catch (\InvalidArgumentException $exception) {
            // TODO: Currently the autocomplete include product variant code instead of its descriptor when rendering a form with existing items
            $this->orderCreateFormElement->removeProduct($product->getVariants()->first()->getCode());
        }
    }

    /**
     * @When /^I specify this order shipping (address as "[^"]+", "[^"]+", "[^"]+", "[^"]+" for "[^"]+")$/
     */
    public function specifyTheShippingAddressAs(AddressInterface $address): void
    {
        $this->orderCreateFormElement->specifyShippingAddress($address);
    }

    /**
     * @When /^I specify this order billing (address as "[^"]+", "[^"]+", "[^"]+", "[^"]+" for "[^"]+")$/
     */
    public function specifyTheBillingAddressAs(AddressInterface $address): void
    {
        $this->orderCreateFormElement->specifyBillingAddress($address);
    }

    /**
     * @When I select :localeName locale
     */
    public function selectLocale(string $localeName): void
    {
        $this->orderCreateFormElement->selectLocale($localeName);
    }

    /**
     * @When I select :currencyName currency
     */
    public function selectCurrency(string $currencyName): void
    {
        $this->orderCreateFormElement->selectcurrency($currencyName);
    }

    /**
     * @When I want to select shipping method
     */
    public function wantToSelectShippingMethod(): void
    {
        $this->orderCreateFormElement->moveToShippingAndPaymentsSection();
    }

    /**
     * @When I select :shippingMethodName shipping method
     */
    public function selectShippingMethod(string $shippingMethodName): void
    {
        $this->orderCreateFormElement->selectShippingMethod($shippingMethodName);
    }

    /**
     * @When I change shipping method to :shippingMethodName
     */
    public function changeShippingMethod(string $shippingMethodName): void
    {
        $this->orderCreateFormElement->changeShippingMethod($shippingMethodName);
    }

    /**
     * @When I select :paymentMethodName payment method
     */
    public function selectPaymentMethod(string $paymentMethodName): void
    {
        $this->orderCreateFormElement->moveToShippingAndPaymentsSection();
        $this->orderCreateFormElement->selectPaymentMethod($paymentMethodName);
    }

    /**
     * @When I change payment method to :paymentMethodName
     */
    public function changePaymentMethod(string $paymentMethodName): void
    {
        $this->orderCreateFormElement->changePaymentMethod($paymentMethodName);
    }

    /**
     * @When I lower order price by :price
     */
    public function lowerOrderPriceBy(string $discount): void
    {
        $this->orderPreviewPage->lowerOrderPriceBy(str_replace(['$', '€', '£'], '', $discount));
    }

    /**
     * @When I lower item with :product price by :discount
     */
    public function lowerItemWithProductPriceBy(ProductInterface $product, string $discount): void
    {
        $this->orderPreviewPage->lowerItemWithProductPriceBy(
            $product->getCode(),
            str_replace(['$', '€', '£'], '', $discount)
        );
    }

    /**
     * @When I change quantity of item :product to :quantity
     */
    public function iChangeQuantityOfItemTo(ProductInterface $product, int $quantity): void
    {
        try {
            $this->orderCreateFormElement->specifyQuantity($product->getVariants()->first()->getDescriptor(), $quantity);
        } catch (\InvalidArgumentException $exception) {
            // TODO: Currently the autocomplete include product variant code instead of its descriptor when rendering a form with existing items
            $this->orderCreateFormElement->specifyQuantity($product->getVariants()->first()->getCode(), $quantity);
        }
    }

    /**
     * @When I reorder the order :order
     */
    public function iReorderTheOrder(OrderInterface $order): void
    {
        $this->reorderPage->open(['id' => $order->getId()]);
    }

    /**
     * @When I confirm this order
     */
    public function confirmThisOrder(): void
    {
        $this->orderPreviewPage->confirm();
    }

    /**
     * @When I go back to the order creation
     */
    public function goBackToTheOrderCreation(): void
    {
        $this->orderPreviewPage->goBack();
    }

    /**
     * @When I place this order
     */
    public function placeThisOrder(): void
    {
        $this->orderCreateFormElement->placeOrder();
    }

    /**
     * @When I place and confirm this order
     */
    public function placeAndConfirmThisOrder(): void
    {
        $this->orderCreateFormElement->placeOrder();
        $this->orderPreviewPage->confirm();
    }

    /**
     * @Then I should have :shippingMethodName shipping method available to select
     */
    public function shouldHaveShippingMethodAvailableToSelect(string $shippingMethodName): void
    {
        Assert::oneOf($shippingMethodName, $this->orderCreateFormElement->getAvailableShippingMethods());
    }

    /**
     * @Then I should not have :shippingMethodName shipping method available to select
     */
    public function shouldNotHaveShippingMethodAvailableToSelect(string $shippingMethodName): void
    {
        foreach ($this->orderCreateFormElement->getAvailableShippingMethods() as $availableShippingMethod) {
            if ($shippingMethodName === $availableShippingMethod) {
                throw new \Exception(sprintf('Shipping method "%s" should not be available', $shippingMethodName));
            }
        }
    }

    /**
     * @Then I should be notified that I need to add some items and shipping address to select from eligible shipping method
     */
    public function shouldBeNotifiedAboutShippingMethodsSelectionRequirements(): void
    {
        Assert::same(
            'You need to add some items and shipping address to select from eligible shipping method',
            $this->orderCreateFormElement->getShippingMethodsValidationMessage()
        );
    }

    /**
     * @Then I should be notified that order has been successfully created
     */
    public function shouldBeNotifiedThatOrderHasBeenSuccessfullyCreated(): void
    {
        $this->notificationChecker->checkNotification(
            'Order has been successfully created',
            NotificationType::success()
        );
    }

    /**
     * @Then I should be notified that order discount cannot be below 0
     */
    public function shouldBeNotifiedThatOrderDiscountCannotBeBelow0(): void
    {
        Assert::true($this->orderPreviewPage->hasOrderDiscountValidationMessage('Discount cannot be below 0'));
    }

    /**
     * @Then I should be notified that item with :product discount cannot be below 0
     */
    public function shouldBeNotifiedThatItemWithProductDiscountCannotBeBelow0(ProductInterface $product): void
    {
        Assert::true(
            $this->orderPreviewPage->hasItemDiscountValidationMessage($product->getCode(), 'Discount cannot be below 0')
        );
    }

    /**
     * @Then there should be a payment link displayed next to order's payment
     */
    public function thereShouldBePaymentLinkDisplayedNextToOrderPayment(): void
    {
        Assert::true($this->orderShowPage->hasPaymentLink());
    }

    /**
     * @Then there should be no payment link displayed next to order's payment
     */
    public function thereShouldBeNoPaymentLinkDisplayedNextToOrderPayment(): void
    {
        Assert::false($this->orderShowPage->hasPaymentLink());
    }

    /**
     * @Then there should be no payment displayed next to order's payment
     */
    public function thereShouldBeNoPaymentDisplayedNextToOrderPayment(): void
    {
        Assert::true($this->orderShowPage->hasNoPaymentBlock());
    }

    /**
     * @Then there should be a payment link sent to :email
     */
    public function thereShouldBePaymentLinkSentTo(string $email): void
    {
        Assert::true($this->emailChecker->hasMessageTo(
            'New order has been created for you in Admin panel. Check it out in your orders history. To pay for this order, click',
            $email
        ));
    }

    /**
     * @Then there should be no payment link sent to :email
     */
    public function thereShouldBeNoPaymentLinkSentTo(string $email): void
    {
        try {
            $this->emailChecker->countMessagesTo($email);
        } catch (\InvalidArgumentException $exception) {
            return;
        }

        throw new \Exception('There should be no messages exception thrown');
    }

    /**
     * @Then there should be one not paid nor shipped order with channel :channelName for :customer in the registry
     */
    public function thereShouldBeOneOrderForInTheRegistry(string $channelName, CustomerInterface $customer): void
    {
        $this->orderIndexPage->open();

        Assert::true($this->orderIndexPage->isSingleResourceOnPage([
            'customer' => $customer->getEmail(),
            'state' => 'New',
            'paymentState' => 'Awaiting payment',
            'shippingState' => 'Ready',
            'channel' => $channelName
        ]));
    }

    /**
     * @Then there should be :amountOfOrders not paid nor shipped orders for :customer in the registry
     */
    public function thereShouldBeOneOrdersForInTheRegistry(int $amountOfOrders, CustomerInterface $customer): void
    {
        $this->orderIndexPage->open();

        Assert::same(
            $amountOfOrders,
            $this->orderIndexPage->countOrders([
                'customer' => $customer->getEmail(),
                'state' => 'New',
                'paymentState' => 'Awaiting payment',
                'shippingState' => 'Ready',
            ])
        );
    }

    /**
     * @Then this order shipping address should be :customerName, :street, :postcode, :city, :countryName
     */
    public function thisOrderShippingAddressShouldBe(
        string $customerName,
        string $street,
        string $postcode,
        string $city,
        string $countryName
    ): void {
        Assert::true($this->orderShowPage->hasShippingAddress($customerName, $street, $postcode, $city, $countryName));
    }

    /**
     * @Then this order billing address should be :customerName, :street, :postcode, :city, :countryName
     */
    public function thisOrderBillingAddressShouldBe(
        string $customerName,
        string $street,
        string $postcode,
        string $city,
        string $countryName
    ): void {
        Assert::true($this->orderShowPage->hasBillingAddress($customerName, $street, $postcode, $city, $countryName));
    }

    /**
     * @Then this order shipping method should be :shippingMethodName
     */
    public function thisOrderShippingMethodShouldBe(string $shippingMethodName): void
    {
        Assert::true($this->orderShowPage->hasShipment($shippingMethodName));
    }

    /**
     * @Then this order payment method should be :paymentMethodName
     */
    public function thisOrderPaymentMethodShouldBe(string $paymentMethodName): void
    {
        Assert::true($this->orderShowPage->hasPayment($paymentMethodName));
    }

    /**
     * @Then I should see preview of the order with total :total
     */
    public function shouldSeePreviewOfTheOrderWithTotal(string $total): void
    {
        Assert::same($this->orderPreviewPage->getTotal(), $total);
    }

    /**
     * @Then this order should contain :productName product
     */
    public function orderShouldContainProduct(string $productName): void
    {
        Assert::true($this->orderPreviewPage->hasProduct($productName));
    }

    /**
     * @Then its shipping total should be :shippingTotal
     */
    public function orderShippingTotalShouldBe(string $shippingTotal): void
    {
        Assert::same($this->orderPreviewPage->getShippingTotal(), $shippingTotal);
    }

    /**
     * @Then it should have one :paymentName payment
     */
    public function orderShouldHaveOnePaymentWithName(string $paymentName): void
    {
        Assert::true($this->orderPreviewPage->hasPayment($paymentName));
    }

    /**
     * @Then it should have :localeName locale
     */
    public function orderShouldHaveLocale(string $localeName): void
    {
        Assert::true($this->orderPreviewPage->hasLocale($localeName));
    }

    /**
     * @Then it should have :currencyName currency
     */
    public function orderShouldHaveCurrency(string $currencyName): void
    {
        Assert::true($this->orderPreviewPage->hasCurrency($currencyName));
    }

    /**
     * @Then I should be able to confirm order creation
     */
    public function shouldBeAbleToConfirmOrderCreation(): void
    {
        Assert::true($this->orderPreviewPage->hasConfirmButton());
    }

    /**
     * @Then the product named :productName should not be in the items list
     */
    public function theProductShouldNotBeInTheItemsList(string $productName): void
    {
        Assert::false($this->orderShowPage->isProductInTheList($productName));
    }

    /**
     * @Then I should be notified that customer email cannot be empty
     */
    public function shouldBeNotifiedThatCustomerEmailCannotBeEmpty(): void
    {
        Assert::true($this->newOrderCustomerPage->hasCustomerEmailValidationMessage('Customer email cannot be empty'));
    }

    /**
     * @Then I should be notified that customer was not selected
     */
    public function shouldBeNotifiedThatUserDoesNotExist(): void
    {
        Assert::true($this->newOrderCustomerPage->hasCustomerEmailValidationMessage('You haven\'t selected a customer'));
    }

    /**
     * @Then there should be no product available
     */
    public function thereShouldBeNoProductAvailable(): void
    {
        Assert::false($this->orderCreateFormElement->areProductsVisible());
    }

    /**
     * @Then adding another payment method should not be possible
     */
    public function addingAnotherPaymentMethodShouldNotBePossible(): void
    {
        Assert::false($this->orderCreateFormElement->isAddPaymentButtonVisible());
    }

    /**
     * @Then :itemName discount should be :discount
     */
    public function discountShouldBe(string $itemName, string $discount): void
    {
        Assert::eq($this->orderShowPage->getItemDiscount($itemName), $discount);
    }

    /**
     * @Given /^I see the address book billing address select$/
     */
    public function iSeeTheAddressBookBillingAddressSelect(): void
    {
        Assert::true($this->newOrderCreatePage->isBillingAddressAutocompleteField());
    }

    /**
     * @Given /^I see the address book shipping address select$/
     */
    public function iSeeTheAddressBookShippingAddressSelect(): void
    {
        Assert::true($this->newOrderCreatePage->isShippingAddressAutocompleteField());
    }

    /**
     * @Given /^I select first address in shipping address book with name "([^"]*)"$/
     */
    public function iSelectFirstAddressInShippingAddressBookWithName(string $name): void
    {
        $name = explode(' ',$name);
        $this->newOrderCreatePage->selectShippingAddress($name);
    }

    /**
     * @Given /^I select first address in billing address book with name "([^"]*)"$/
     */
    public function iSelectFirstAddressInBillingAddressBookWith(string $name): void
    {
        $name = explode(' ',$name);
        $this->newOrderCreatePage->selectBillingAddress($name);
    }

    /**
     * @Given /^I should not see the address book shipping address select$/
     */
    public function iShouldNotSeeTheAddressBookShippingAddressSelect(): void
    {
        Assert::false($this->newOrderCreatePage->isShippingAddressAutocompleteField());
    }

    /**
     * @Given /^I should not see the address book billing address select$/
     */
    public function iShouldNotSeeTheAddressBookBillingAddressSelect(): void
    {
        Assert::false($this->newOrderCreatePage->isBillingAddressAutocompleteField());
    }
}
