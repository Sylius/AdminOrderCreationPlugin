<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

interface OrderPreviewPageInterface
{
    public function getTotal(): string;

    public function getShippingTotal(): string;

    public function hasProduct(string $productName): bool;

    public function hasPayment(string $paymentName): bool;

    public function hasConfirmButton(): bool;

    public function confirm(): void;
}
