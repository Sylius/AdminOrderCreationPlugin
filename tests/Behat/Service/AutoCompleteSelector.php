<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Service;

use Behat\Mink\Element\ElementInterface;

final class AutoCompleteSelector
{
    public function selectOption(ElementInterface $scope, string $optionName): void
    {
        $scope->find('css', '.sylius-autocomplete .icon')->click();

        $scope->waitFor(1, function() use ($scope) {
            return $scope
                ->find('css', '.sylius-autocomplete .menu')
                ->hasClass('visible')
            ;
        });

        $scope
            ->find('css', sprintf('.sylius-autocomplete .menu .item:contains("%s")', $optionName))
            ->click()
        ;
    }
}
