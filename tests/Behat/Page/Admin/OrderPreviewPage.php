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
        return '$100.00';
    }

    public function getShippingTotal(): string
    {
        return '$0.00';
    }

    public function hasProduct(string $productName): bool
    {
        return true;
    }

    public function hasPayment(string $paymentName): bool
    {
        return true;
    }

    public function hasConfirmButton(): bool
    {
        return null !== $this->getDocument()->findButton('Confirm');
    }
}
