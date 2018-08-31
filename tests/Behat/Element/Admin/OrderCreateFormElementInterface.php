<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Element\Admin;

use Sylius\Component\Core\Model\AddressInterface;

interface OrderCreateFormElementInterface
{
    public function addProduct(string $productName): void;

    public function addMultipleProducts(string $productName, int $quantity): void;

    public function removeProduct(string $productCode): void;

    public function areProductsVisible(): bool;

    public function specifyShippingAddress(AddressInterface $address): void;

    public function specifyBillingAddress(AddressInterface $address): void;

    public function selectLocale(string $localeName): void;

    /** @return array|string[] */
    public function getAvailableShippingMethods(): array;

    public function moveToShippingAndPaymentsSection(): void;

    public function selectShippingMethod(string $shippingMethodName): void;

    public function changeShippingMethod(string $shippingMethodName): void;

    public function selectPaymentMethod(string $paymentMethodName): void;

    public function changePaymentMethod(string $paymentMethodName): void;

    public function specifyQuantity(string $itemProductCode, int $quantity): void;

    public function placeOrder(): void;

    public function getShippingMethodsValidationMessage(): string;
}
