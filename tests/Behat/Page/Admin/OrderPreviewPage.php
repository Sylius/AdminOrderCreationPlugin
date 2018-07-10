<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Sylius\Behat\Page\SymfonyPage;

final class OrderPreviewPage extends SymfonyPage implements OrderPreviewPageInterface
{
    public function getRouteName(): string
    {
        return 'sylius_admin_order_creation_preview_order';
    }

    public function getTotal(): string
    {
        return str_replace('Total: ', '', $this->getDocument()->find('css', 'td#total')->getText());
    }

    public function getShippingTotal(): string
    {
        return str_replace('Shipping total: ', '', $this->getDocument()->find('css', 'td#shipping-total')->getText());
    }

    public function hasProduct(string $productName): bool
    {
        return $this->getDocument()->has('css', sprintf('.sylius-product-name:contains("%s")', $productName));
    }

    public function hasPayment(string $paymentName): bool
    {
        return $this->getDocument()->has('css', sprintf('#sylius-payments .item:contains("%s")', $paymentName));
    }

    public function hasConfirmButton(): bool
    {
        return null !== $this->getDocument()->findButton('Confirm');
    }

    public function lowerOrderPriceBy(string $discount): void
    {
        $this->getDocument()->fillField('Order discount', $discount);
        $this->getDocument()->pressButton('Update');
    }

    public function lowerItemWithProductPriceBy(string $productCode, string $discount): void
    {
        $item = $this->getDocument()->find('css', sprintf('#items tr:contains("%s")', $productCode));
        $item->fillField('Item discount', $discount);
        $this->getDocument()->pressButton('Update');
    }

    public function confirm(): void
    {
        $confirmButton = $this->getDocument()->findButton('Confirm');

        $confirmButton->focus();
        $confirmButton->press();
    }
}
