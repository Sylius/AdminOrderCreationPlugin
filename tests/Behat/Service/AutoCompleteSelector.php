<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Service;

use Behat\Mink\Element\ElementInterface;

final class AutoCompleteSelector
{
    public function selectOption(ElementInterface $scope, string $optionName): void
    {
        $this->waitForItemsToLoad($scope);

        $scope
            ->find('css', sprintf('.sylius-autocomplete .menu .item:contains("%s")', $optionName))
            ->click()
        ;
    }

    public function areItemsVisible(ElementInterface $scope): bool
    {
        $this->waitForItemsToLoad($scope);

        return strpos($scope->find('css', '.sylius-autocomplete .menu')->getText(), 'No results found') !== false;
    }

    private function waitForItemsToLoad(ElementInterface $scope): void
    {
        $scope->find('css', '.sylius-autocomplete .icon')->click();

        $scope->waitFor(1, function() use ($scope) {
            return $scope
                ->find('css', '.sylius-autocomplete .search')
                ->hasClass('visible')
            ;
        });
    }
}
