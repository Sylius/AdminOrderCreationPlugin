<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Behat\Mink\Session;
use Sylius\Behat\Page\SymfonyPage;
use Symfony\Component\Routing\RouterInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Service\AutoCompleteSelector;

final class NewOrderCustomerPage extends SymfonyPage implements NewOrderCustomerPageInterface
{
    /** @var AutoCompleteSelector */
    private $autoCompleteSelector;

    public function __construct(
        Session $session,
        array $parameters,
        RouterInterface $router,
        AutoCompleteSelector $autoCompleteSelector
    ) {
        parent::__construct($session, $parameters, $router);

        $this->autoCompleteSelector = $autoCompleteSelector;
    }

    public function getRouteName(): string
    {
        return 'sylius_admin_order_creation_select_order_customer';
    }

    public function selectCustomer(string $customerEmail): void
    {
        $this->autoCompleteSelector->selectOption($this->getDocument(), $customerEmail);
    }

    public function next(): void
    {
        $this->getDocument()->pressButton('Next');
    }

    public function createCustomer(string $email): void
    {
        $this->getDocument()->fillField('New customer email', $email);
        $this->getDocument()->pressButton('Create new');
    }
}
