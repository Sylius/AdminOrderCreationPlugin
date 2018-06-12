<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Context\Admin;

use Behat\Behat\Context\Context;
use Sylius\Behat\NotificationType;
use Sylius\Behat\Service\NotificationCheckerInterface;
use Sylius\Component\Core\Model\AddressInterface;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\ProductInterface;
use Sylius\Component\Core\Test\Services\EmailCheckerInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\NewOrderCustomerPageInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\OrderCreatePageInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\OrderIndexPageInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin\OrderShowPageInterface;
use Webmozart\Assert\Assert;

final class ManagingOrdersContext implements Context
{
    /** @var OrderIndexPageInterface */
    private $orderIndexPage;

    /** @var NewOrderCustomerPageInterface */
    private $newOrderCustomerPage;

    /** @var OrderCreatePageInterface */
    private $orderCreatePage;

    /** @var OrderShowPageInterface */
    private $orderShowPage;

    /** @var NotificationCheckerInterface */
    private $notificationChecker;

    /** @var EmailCheckerInterface */
    private $emailChecker;

    public function __construct(
        OrderIndexPageInterface $orderIndexPage,
        NewOrderCustomerPageInterface $newOrderCustomerPage,
        OrderCreatePageInterface $orderCreatePage,
        OrderShowPageInterface $orderShowPage,
        NotificationCheckerInterface $notificationChecker,
        EmailCheckerInterface $emailChecker
    ) {
        $this->orderIndexPage = $orderIndexPage;
        $this->newOrderCustomerPage = $newOrderCustomerPage;
        $this->orderCreatePage = $orderCreatePage;
        $this->orderShowPage = $orderShowPage;
        $this->notificationChecker = $notificationChecker;
        $this->emailChecker = $emailChecker;
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
        $this->orderCreatePage->addProduct($product->getName());
    }

    /**
     * @When I add :quantity of :product to this order
     */
    public function addMultipleProductsToThisOrder(int $quantity, ProductInterface $product): void
    {
        $this->orderCreatePage->addMultipleProducts($product->getName(), $quantity);
    }

    /**
     * @When I remove :product from this order
     */
    public function removeProductFromThisOrder(ProductInterface $product): void
    {
        $this->orderCreatePage->removeProduct($product->getName());
    }

    /**
     * @When /^I specify this order shipping (address as "[^"]+", "[^"]+", "[^"]+", "[^"]+" for "[^"]+")$/
     */
    public function specifyTheShippingAddressAs(AddressInterface $address): void
    {
        $this->orderCreatePage->specifyShippingAddress($address);
    }

    /**
     * @When /^I specify this order billing (address as "[^"]+", "[^"]+", "[^"]+", "[^"]+" for "[^"]+")$/
     */
    public function specifyTheBillingAddressAs(AddressInterface $address): void
    {
        $this->orderCreatePage->specifyBillingAddress($address);
    }

    /**
     * @When I select :shippingMethodName shipping method
     */
    public function selectShippingMethod(string $shippingMethodName): void
    {
        $this->orderCreatePage->selectShippingMethod($shippingMethodName);
    }

    /**
     * @When I select :paymentMethodName payment method
     */
    public function selectPaymentMethod(string $paymentMethodName): void
    {
        $this->orderCreatePage->selectPaymentMethod($paymentMethodName);
    }

    /**
     * @When I specify order price as :price
     */
    public function specifyOrderPriceAs(string $price): void
    {
        $this->orderCreatePage->specifyOrderPrice(str_replace(['$', '€', '£'], '', $price));
    }

    /**
     * @When I specify item with :product price as :price
     */
    public function specifyItemWithProductUnitPriceAs(ProductInterface $product, string $price): void
    {
        $this->orderCreatePage->specifyUnitPrice(
            $product->getName(),
            str_replace(['$', '€', '£'], '', $price)
        );
    }

    /**
     * @When I place this order
     */
    public function placeThisOrder(): void
    {
        $this->orderCreatePage->placeOrder();
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
        Assert::true($this->orderCreatePage->hasOrderPriceValidationMessage('Order price cannot be below 0'));
    }

    /**
     * @Then I should be notified that item with :product price cannot be below 0
     */
    public function shouldBeNotifiedThatItemWithProductPriceCannotBeBelow0(ProductInterface $product): void
    {
        Assert::true(
            $this->orderCreatePage->hasUnitPriceValidationMessage($product->getName(), 'Price cannot be below 0')
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
}
