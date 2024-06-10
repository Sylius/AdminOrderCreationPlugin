<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Behat\Mink\Element\NodeElement;
use FriendsOfBehat\PageObjectExtension\Page\SymfonyPage;

final class OrderPreviewPage extends SymfonyPage implements OrderPreviewPageInterface
{
    public function getRouteName(): string
    {
        return 'sylius_admin_order_creation_preview_order';
    }

    public function getTotal(): string
    {
        /** @var NodeElement $totalCell */
        $totalCell = $this->getDocument()->find('css', 'td#total');

        return str_replace('Order total: ', '', $totalCell->getText());
    }

    public function getShippingTotal(): string
    {
        /** @var NodeElement $shippingTotalCell */
        $shippingTotalCell = $this->getDocument()->find('css', 'td#shipping-total');

        return str_replace('Shipping total: ', '', $shippingTotalCell->getText());
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

    public function hasOrderDiscountValidationMessage(string $message): bool
    {
        $orderDiscountValidationMessage = $this
            ->getDocument()
            ->find('css', '#sylius_admin_order_creation_new_order_adjustments .sylius-validation-error')
        ;

        return
            $orderDiscountValidationMessage !== null &&
            $orderDiscountValidationMessage->getText() === $message
        ;
    }

    public function hasItemDiscountValidationMessage(string $productCode, string $message): bool
    {
        /** @var NodeElement $item */
        $item = $this->getDocument()->find('css', sprintf('table tr:contains("%s") + tr', $productCode));

        return null !== $item->find('css', sprintf('.sylius-validation-error:contains("%s")', $message));
    }

    public function hasLocale(string $localeName): bool
    {
        /** @var NodeElement $localeElement */
        $localeElement = $this->getDocument()->find('css', '#sylius-order-locale-code');

        return str_contains($localeElement->getText(), $localeName);
    }

    public function hasCurrency(string $currencyName): bool
    {
        /** @var NodeElement $localeElement */
        $localeElement = $this->getDocument()->find('css', '#sylius-order-currency');

        return str_contains($localeElement->getText(), $currencyName);
    }

    public function lowerOrderPriceBy(string $discount): void
    {
        /** @var NodeElement $discountCollection */
        $discountCollection = $this->getDocument()->find('css', '#sylius_admin_order_creation_new_order_adjustments');

        $discountCollection->clickLink('Add discount');
        $this->getDocument()->waitFor(1, fn () => $discountCollection->has('css', '[data-form-collection="item"]'));

        $discountCollection->fillField('Order discount', $discount);
    }

    public function lowerItemWithProductPriceBy(string $productCode, string $discount): void
    {
        /** @var NodeElement $item */
        $item = $this->getDocument()->find('css', sprintf('table tr:contains("%s") + tr', $productCode));
        $item->clickLink('Add discount');

        /** @var NodeElement $discountCollection */
        $discountCollection = $item->find('css', '[data-form-type="collection"]');

        $this->getDocument()->waitFor(1, fn () => $discountCollection->has('css', '[data-form-collection="item"]'));

        $discountCollection->fillField('Item discount', $discount);
    }

    public function confirm(): void
    {
        $this->getDocument()->pressButton('Confirm');
    }

    public function goBack(): void
    {
        $this->getDocument()->pressButton('Back');
    }
}
