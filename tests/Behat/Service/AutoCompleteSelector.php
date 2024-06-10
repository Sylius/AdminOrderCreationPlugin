<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Service;

use Behat\Mink\Element\ElementInterface;
use Behat\Mink\Element\NodeElement;
use Behat\Mink\Session;
use Sylius\Behat\Service\AutocompleteHelper;
use Sylius\Behat\Service\JQueryHelper;

final class AutoCompleteSelector
{
    public function selectOption(Session $session, ElementInterface $scope, string $optionName): void
    {
        /** @var NodeElement $autocomplete */
        $autocomplete = $scope->find('css', '.sylius-autocomplete');
        AutocompleteHelper::chooseValue($session, $autocomplete, $optionName);
    }

    public function areItemsVisible(Session $session, ElementInterface $scope): bool
    {
        JQueryHelper::waitForAsynchronousActionsToFinish($session);

        /** @var NodeElement $menu */
        $menu = $scope->find('css', '.sylius-autocomplete .menu');

        return str_contains($menu->getText(), 'No results found');
    }
}
