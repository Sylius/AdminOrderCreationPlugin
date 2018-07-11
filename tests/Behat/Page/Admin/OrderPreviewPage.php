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
        $discountCollection = $this->getDocument()->find('css', '#sylius_admin_order_creation_new_order_adjustments');

        $discountCollection->clickLink('Add discount');
        $this->getDocument()->waitFor(1, function () use ($discountCollection) {
            return $discountCollection->has('css', '[data-form-collection="item"]');
        });

        $discountCollection->fillField('Order discount', $discount);
    }

    public function lowerItemWithProductPriceBy(string $productCode, string $discount): void
    {
        $item = $this->getDocument()->find('css', sprintf('table tr:contains("%s")', $productCode));
        $item->clickLink('Add discount');

        $discountCollection = $item->find('css', '#sylius_admin_order_creation_new_order_adjustments');

        $this->getDocument()->waitFor(1, function () use ($discountCollection) {
            return $discountCollection->has('css', '[data-form-collection="item"]');
        });

        $discountCollection->fillField('Item discount', $discount);
    }

    public function confirm(): void
    {
        $confirmButton = $this->getDocument()->findButton('Confirm');

        $confirmButton->focus();
        $confirmButton->press();
    }
}
