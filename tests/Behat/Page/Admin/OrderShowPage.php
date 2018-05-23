<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Sylius\Behat\Page\Admin\Order\ShowPage;

final class OrderShowPage extends ShowPage implements OrderShowPageInterface
{
    public function hasPaymentLink(): bool
    {
        $lastPayment = $this->getElement('payments')->find('css', '.item:last-child');

        return null !== $lastPayment->find('css', '#payment-link');
    }

    public function hasOrderPriceValidationMessage(string $message): bool
    {
        $customTotalElement = $this->getDocument()->find('css', '.field:contains("Order price")');
        $validationError = $customTotalElement->find('css', '.sylius-validation-error');

        if (null === $validationError) {
            return false;
        }

        return $validationError->getText() === $message;
    }

    public function hasUnitPriceValidationMessage(string $productName, string $message): bool
    {
        $item = $this->getDocument()->find('css', sprintf('table tr:contains("%s")', $productName));


    }
}
