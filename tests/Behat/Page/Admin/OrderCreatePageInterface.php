<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Sylius\Behat\Page\Admin\Crud\CreatePageInterface;
use Sylius\Component\Core\Model\AddressInterface;

interface OrderCreatePageInterface extends CreatePageInterface
{
    public function addProduct(string $productName): void;

    public function addMultipleProducts(string $productName, int $quantity): void;

    public function removeProduct(int $productId): void;

    public function specifyShippingAddress(AddressInterface $address): void;

    public function specifyBillingAddress(AddressInterface $address): void;

    public function selectShippingMethod(string $shippingMethodName): void;

    public function selectPaymentMethod(string $paymentMethodName): void;

    public function specifyOrderPrice(string $orderPrice): void;

    public function placeOrder(): void;

    public function hasOrderPriceValidationMessage(string $message): bool;
}
