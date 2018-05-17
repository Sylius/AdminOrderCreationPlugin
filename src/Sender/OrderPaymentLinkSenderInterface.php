<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Sender;

use Sylius\Component\Core\Model\OrderInterface;

interface OrderPaymentLinkSenderInterface
{
    public function sendPaymentLink(OrderInterface $order): void;
}
