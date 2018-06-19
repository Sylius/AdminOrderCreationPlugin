<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Context\Admin;

use Behat\Behat\Context\Context;
use Sylius\AdminOrderCreationPlugin\Entity\OrderInterface;
use Sylius\Behat\NotificationType;
use Sylius\Behat\Service\NotificationCheckerInterface;
use Sylius\Component\Addressing\Comparator\AddressComparatorInterface;
use Sylius\Component\Core\Model\AddressInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Test\Services\EmailCheckerInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Element\Admin\OrderCreateFormElementInterface;
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

    public function __construct(
        OrderIndexPageInterface $orderIndexPage,
        NewOrderCustomerPageInterface $newOrderCustomerPage,
        OrderPreviewPageInterface $orderPreviewPage,
        OrderShowPageInterface $orderShowPage,
        ReorderPageInterface $reorderPage,
        OrderCreateFormElementInterface $orderCreateFormElement,
        NotificationCheckerInterface $notificationChecker,
        EmailCheckerInterface $emailChecker,
        AddressComparatorInterface $addressComparator
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
    }

    /**
     * @When I create a new order for :customer
     */
    public function createNewOrderFor(CustomerInterface $customer): void
    {
        $this->orderIndexPage->open();
        $this->orderIndexPage->createOrder();

        $this->newOrderCustomerPage->selectCustomer($customer->getEmail());
        $this->newOrderCustomerPage->next();
    }

    /**
     * @When I create a new order for a new customer with email :email
     */
    public function createNewOrderForNewCustomerWithEmail(string $email): void
    {
        $this->orderIndexPage->open();
        $this->orderIndexPage->createOrder();

        $this->newOrderCustomerPage->createCustomer($email);
    }

    /**
     * @When I add :product to this order
     */
    public function addProductToThisOrder(ProductInterface $product): void
    {
        $this->orderCreateFormElement->addProduct($product->getName());
    }

    /**
     * @When I add :quantity of :product to this order
     */
    public function addMultipleProductsToThisOrder(int $quantity, ProductInterface $product): void
    {
        $this->orderCreateFormElement->addMultipleProducts($product->getName(), $quantity);
    }

    /**
     * @When I remove :product from this order
     */
    public function removeProductFromThisOrder(ProductInterface $product): void
    {
        $this->orderCreateFormElement->removeProduct($product->getName());
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
     * @When I select :shippingMethodName shipping method
     */
    public function selectShippingMethod(string $shippingMethodName): void
    {
        $this->orderCreateFormElement->selectShippingMethod($shippingMethodName);
    }

    /**
     * @When I select :paymentMethodName payment method
     */
    public function selectPaymentMethod(string $paymentMethodName): void
    {
        $this->orderCreateFormElement->selectPaymentMethod($paymentMethodName);
    }

    /**
     * @When I specify order price as :price
     */
    public function specifyOrderPriceAs(string $price): void
    {
        $this->orderCreateFormElement->specifyOrderPrice(str_replace(['$', '€', '£'], '', $price));
    }

    /**
     * @When I specify item with :product price as :price
     */
    public function specifyItemWithProductUnitPriceAs(ProductInterface $product, string $price): void
    {
        $this->orderCreateFormElement->specifyUnitPrice(
            $product->getName(),
            str_replace(['$', '€', '£'], '', $price)
        );
    }

    /**
     * @When I place this order
     */
    public function placeThisOrder(): void
    {
        $this->orderCreateFormElement->placeOrder();
    }

    /**
     * @When I reorder the order :order
     */
    public function iReorderTheOrder(OrderInterface $order): void
    {
        $this->reorderPage->open(['id' => $order->getId()]);
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
     * @Then I should be notified that order price cannot be below 0
     */
    public function shouldBeNotifiedThatOrderPriceCannotBeBelow0(): void
    {
        Assert::true($this->orderCreateFormElement->hasOrderPriceValidationMessage('Order price cannot be below 0'));
    }

    /**
     * @Then I should be notified that item with :product price cannot be below 0
     */
    public function shouldBeNotifiedThatItemWithProductPriceCannotBeBelow0(ProductInterface $product): void
    {
        Assert::true(
            $this->orderCreateFormElement->hasUnitPriceValidationMessage($product->getName(), 'Price cannot be below 0')
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
     * @Then there should be one not paid nor shipped order for :customer in the registry
     */
    public function thereShouldBeOneOrderForInTheRegistry(CustomerInterface $customer): void
    {
        $this->orderIndexPage->open();

        Assert::true($this->orderIndexPage->isSingleResourceOnPage([
            'customer' => $customer->getEmail(),
            'state' => 'New',
            'paymentState' => 'Awaiting payment',
            'shippingState' => 'Ready',
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
     * @Then /^the (address "[^"]+", "[^"]+", "[^"]+", "[^"]+", "[^"]+") should be filled as billing address$/
     */
    public function theAddressShouldBeSpecifiedAsBillingAddress(AddressInterface $address): void
    {
        Assert::true($this->addressComparator->equal(
            $address,
            $this->orderCreateFormElement->getPreFilledBillingAddress()
        ));
    }

    /**
     * @Then /^the (address "[^"]+", "[^"]+", "[^"]+", "[^"]+", "[^"]+") should be specified as shipping address$/
     */
    public function theAddressShouldBeSpecifiedAsShippingAddress(AddressInterface $address): void
    {
        Assert::true($this->addressComparator->equal(
            $address,
            $this->orderCreateFormElement->getPreFilledShippingAddress()
        ));
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
     * @Then I should be able to confirm order creation
     */
    public function shouldBeAbleToConfirmOrderCreation(): void
    {
        Assert::true($this->orderPreviewPage->hasConfirmButton());
    }

    /**
     * @Then the :shippingMethodName shipping method should be selected
     */
    public function theShippingMethodShouldBeSelected(string $shippingMethodName): void
    {
        Assert::same(
            $this->orderCreateFormElement->getShippingMethodName(),
            $shippingMethodName
        );
    }

    /**
     * @Then the :paymentMethodName payment method should be selected
     */
    public function thePaymentMethodShouldBeSelected(string $paymentMethodName): void
    {
        Assert::same(
            $this->orderCreateFormElement->getPaymentMethodName(),
            $paymentMethodName
        );
    }
}
