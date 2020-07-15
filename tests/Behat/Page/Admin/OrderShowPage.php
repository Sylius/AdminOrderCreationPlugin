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

    public function hasNoPaymentBlock(): bool
    {
        return null !== $this->getElement('no-payments');
    }

    protected function getDefinedElements(): array
    {
        return array_merge(parent::getDefinedElements(), [
            'no-payments' => '#no-payments',
        ]);
    }
}
