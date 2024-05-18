<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Element\Admin;

use Sylius\Component\Core\Model\AddressInterface;

interface OrderCreateFormElementInterface
{
    public function addProductWithQuantity(string $productVariantDescriptor, int $quantity): void;

    public function removeProduct(string $productVariantDescriptor): void;

    public function areProductsVisible(): bool;

    public function specifyShippingAddress(AddressInterface $address): void;

    public function specifyBillingAddress(AddressInterface $address): void;

    public function selectLocale(string $localeName): void;

    public function selectCurrency(string $currencyName): void;

    /** @return array|string[] */
    public function getAvailableShippingMethods(): array;

    public function moveToShippingAndPaymentsSection(): void;

    public function selectShippingMethod(string $shippingMethodName): void;

    public function changeShippingMethod(string $shippingMethodName): void;

    public function selectPaymentMethod(string $paymentMethodName): void;

    public function changePaymentMethod(string $paymentMethodName): void;

    public function specifyQuantity(string $productVariantDescriptor, int $quantity): void;

    public function placeOrder(): void;

    public function getShippingMethodsValidationMessage(): string;

    public function isAddPaymentButtonVisible(): bool;
}
