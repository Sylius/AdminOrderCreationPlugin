<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

interface NewOrderCustomerPageInterface
{
    public function selectCustomer(string $customerEmail): void;

    public function next(): void;

    public function createCustomer(string $email): void;

    public function selectChannel(string $channelName): void;

    public function hasCustomerEmailValidationMessage(string $message): bool;
}
