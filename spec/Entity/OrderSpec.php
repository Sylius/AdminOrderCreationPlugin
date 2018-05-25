<?php

namespace spec\Sylius\AdminOrderCreationPlugin\Entity;

use PhpSpec\ObjectBehavior;
use Sylius\AdminOrderCreationPlugin\Entity\OrderInterface;
use Sylius\Component\Core\Model\Order;

final class OrderSpec extends ObjectBehavior
{
    function it_is_sylius_order()
    {
        $this->shouldHaveType(Order::class);
    }

    function it_implements_order_interface()
    {
        $this->shouldImplement(OrderInterface::class);
    }

    function it_has_returns_custom_total_as_order_total_if_set()
    {
        $this->setCustomTotal(2000);
        $this->getCustomTotal()->shouldReturn(2000);
        $this->getTotal()->shouldReturn(2000);
    }
}
