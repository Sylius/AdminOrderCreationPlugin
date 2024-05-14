<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Service;

use Behat\Mink\Element\ElementInterface;
use Behat\Testwork\Call\Exception\FatalThrowableError;

final class AutoCompleteSelector
{
    public function selectOption(ElementInterface $scope, string $optionName): void
    {
        $this->waitForItemsToLoad($scope);

        $scope->waitFor(10, function () use ($scope, $optionName) {
            try {
                $scope->find('css', sprintf('.sylius-autocomplete .menu .item:contains("%s")', $optionName))->click();

                return true;
            } catch (FatalThrowableError $exception) {
                return false;
            }
        });
    }

    public function areItemsVisible(ElementInterface $scope): bool
    {
        $this->waitForItemsToLoad($scope);

        return strpos($scope->find('css', '.sylius-autocomplete .menu')->getText(), 'No results found') !== false;
    }

    private function waitForItemsToLoad(ElementInterface $scope): void
    {
        $scope->find('css', '.sylius-autocomplete .icon')->click();

        $scope->waitFor(100, function() use ($scope) {
            return $scope
                ->find('css', '.sylius-autocomplete .menu')
                ->hasClass('visible')
            ;
        });
    }
}
