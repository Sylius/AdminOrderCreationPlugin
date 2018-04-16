<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Context\Admin;

use Behat\Behat\Context\Context;
use Sylius\Component\Core\Model\CustomerInterface;
use Sylius\Component\Core\Model\ProductInterface;

final class ManagingOrdersContext implements Context
{
    /**
     * @When I create a new order for :customer
     */
    public function createNewOrderFor(CustomerInterface $customer): void
    {
        throw new PendingException();
    }

    /**
     * @When I create a new order for a new customer with email :email
     */
    public function createNewOrderForNewCustomerWithEmail(string $email): void
    {
        throw new PendingException();
    }

    /**
     * @When I add :product to this order
     */
    public function addToThisOrder(ProductInterface $product): void
    {
        throw new PendingException();
    }

    /**
     * @When I place this order
     */
    public function placeThisOrder(): void
    {
        throw new PendingException();
    }

    /**
     * @Then I should be notified that order has been successfully created
     */
    public function shouldBeNotifiedThatOrderHasBeenSuccessfullyCreated(): void
    {
        throw new PendingException();
    }

    /**
     * @Then there should be one order for :customer in the registry
     */
    public function thereShouldBeOneOrderForInTheRegistry(CustomerInterface $customer): void
    {
        throw new PendingException();
    }

    /**
     * @Then this order should not be paid nor shipped
     */
    public function thisOrderShouldNotBePaidNorShipped(): void
    {
        throw new PendingException();
    }

    /**
     * @Then I should be able to copy payment link for a customer
     */
    public function shouldBeAbleToCopyPaymentLinkForCustomer(): void
    {
        throw new PendingException();
    }
}
