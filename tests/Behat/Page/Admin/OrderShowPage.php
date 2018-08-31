<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Sylius\Behat\Page\Admin\Order\ShowPage;

final class OrderShowPage extends ShowPage implements OrderShowPageInterface
{
    public function hasPaymentLink(): bool
    {
        $lastPayment = $this->getElement('payments')->find('css', '.item:last-child');

        return null !== $lastPayment->find('css', '#payment-link');
    }

    public function hasLocale(string $localeName): bool
    {
        return strpos($this->getElement('header')->getText(), $localeName) !== false;
    }

    protected function getDefinedElements()
    {
        return array_merge(parent::getDefinedElements(), [
            'header' => '.ui .horizontal .divided .list'
        ]);
    }
}
