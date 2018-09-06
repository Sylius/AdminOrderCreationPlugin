<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Context\Admin\Application;

use Behat\Behat\Context\Context;
use Behat\Mink\Session;
use Symfony\Component\Routing\RouterInterface;

final class ManagingOrdersContext implements Context
{
    /** @var Session */
    private $session;

    /** @var RouterInterface */
    private $router;

    public function __construct(Session $session, RouterInterface $router)
    {
        $this->session = $session;
        $this->router = $router;
    }

    /**
     * @When I try to create a new order for a new customer without email
     */
    public function tryToCreateNewOrderForNewCustomerWithoutEmail(): void
    {
        try {
            $this->session->visit($this->router->generate('sylius_admin_order_creation_order_create'));
        } catch (\Exception $exception) {
            return;
        }

        throw new \Exception('Trying to create new order without an email should fail');
    }

    /**
     * @Then I should be notified that customer email cannot be empty
     */
    public function shouldBeNotifiedThatCustomerEmailCannotBeEmpty(): void
    {
        // not relavant in application scope
    }
}
