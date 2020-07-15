<?php

declare(strict_types=1);

namespace Tests\Sylius\AdminOrderCreationPlugin\Behat\Page\Admin;

use Sylius\Behat\Page\Admin\Order\ShowPageInterface;

interface OrderShowPageInterface extends ShowPageInterface
{
    public function hasPaymentLink(): bool;

    public function hasNoPaymentBlock(): bool;
}
