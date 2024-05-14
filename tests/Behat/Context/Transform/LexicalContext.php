<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Context\Transform;

use Behat\Behat\Context\Context;

final class LexicalContext implements Context
{
    /**
     * @Transform /^"(\-)?(?:€|£|￥|\$)([0-9,]+(\.[0-9]*)?)"$/
     */
    public function getPriceFromString(string $sign, string $price): int
    {
        $this->validatePriceString($price);

        $price = str_replace(',', '', $price);
        $price = (int) round((float) $price * 100, 2);

        if ('-' === $sign) {
            $price *= -1;
        }

        return $price;
    }

    /**
     * @Transform /^"((?:\d+\.)?\d+)%"$/
     */
    public function getPercentageFromString(string $percentage): float
    {
        return (float) $percentage / 100;
    }

    /**
     * @throws \InvalidArgumentException
     */
    private function validatePriceString(string $price): void
    {
        if (!preg_match('/^.*\.\d{2}$/', $price)) {
            throw new \InvalidArgumentException('The price string should have exactly 2 decimal digits.');
        }

        if (!preg_match('/^\d{1,3}(,\d{3})*\.\d{2}$/', $price)) {
            throw new \InvalidArgumentException('Thousands and larger numbers should be separated by commas.');
        }
    }
}
