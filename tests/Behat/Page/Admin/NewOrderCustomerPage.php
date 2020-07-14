<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Behat\Mink\Session;
use FriendsOfBehat\PageObjectExtension\Page\SymfonyPage;
use Symfony\Component\Routing\RouterInterface;
use Tests\Sylius\AdminOrderCreationPlugin\Behat\Service\AutoCompleteSelector;

final class NewOrderCustomerPage extends SymfonyPage implements NewOrderCustomerPageInterface
{
    /** @var AutoCompleteSelector */
    private $autoCompleteSelector;

    public function __construct(
        Session $session,
        $parameters,
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

    public function selectChannel(string $channelName): void
    {
        $this->getDocument()->selectFieldOption(
            'sylius_admin_order_creation_new_order_customer_create_channel',
            $channelName
        );
    }

    public function hasCustomerEmailValidationMessage(string $message): bool
    {
        $validationMessage = $this->getDocument()->find('css', 'form .sylius-validation-error');

        return $validationMessage !== null && $validationMessage->getText() === $message;
    }
}
