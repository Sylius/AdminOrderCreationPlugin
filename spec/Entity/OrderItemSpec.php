<?php

declare(strict_types=1);

namespace spec\Sylius\AdminOrderCreationPlugin\Entity;

use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Entity\OrderItemInterface;
use Sylius\Component\Core\Model\OrderItem;

final class OrderItemSpec extends ObjectBehavior
{
    function it_is_sylius_order_item()
    {
        $this->shouldHaveType(OrderItem::class);
    }

    function it_implements_order_item_interface()
    {
        $this->shouldImplement(OrderItemInterface::class);
    }

    function it_has_custom_unit_price()
    {
        $this->setCustomUnitPrice(1000);
        $this->getCustomUnitPrice()->shouldReturn(1000);
    }
}
