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
}
