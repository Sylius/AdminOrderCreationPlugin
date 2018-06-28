<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\ReorderProcessing;

use Sylius\Component\Core\Model\OrderInterface;
use Sylius\Component\Core\Model\OrderItemInterface;
use Sylius\Component\Core\Model\ProductVariantInterface;
use Sylius\Component\Order\Modifier\OrderItemQuantityModifierInterface;
use Sylius\Component\Order\Modifier\OrderModifierInterface;
use Sylius\Component\Resource\Factory\FactoryInterface;

final class ReorderItemsProcessor implements ReorderProcessor
{
    /** @var FactoryInterface */
    private $orderItemFactory;

    /** @var OrderItemQuantityModifierInterface */
    private $orderItemQuantityModifier;

    /** @var OrderModifierInterface */
    private $orderModifier;

    public function __construct(
        FactoryInterface $orderItemFactory,
        OrderItemQuantityModifierInterface $orderItemQuantityModifier,
        OrderModifierInterface $orderModifier
    ) {
        $this->orderItemFactory = $orderItemFactory;
        $this->orderItemQuantityModifier = $orderItemQuantityModifier;
        $this->orderModifier = $orderModifier;
    }

    public function process(OrderInterface $order, OrderInterface $reorder): void
    {
        $orderItems = $order->getItems();

        /** @var OrderItemInterface $orderItem */
        foreach ($orderItems as $orderItem) {
            /** @var ProductVariantInterface $productVariant */
            $productVariant = $orderItem->getVariant();
            if ($productVariant->isTracked() && !$productVariant->isInStock()) {
                continue;
            }

            /** @var OrderItemInterface $newItem */
            $newItem = $this->orderItemFactory->createNew();

            $newItem->setVariant($orderItem->getVariant());
            $newItem->setUnitPrice($orderItem->getUnitPrice());
            $newItem->setProductName($orderItem->getProductName());
            $newItem->setVariantName($orderItem->getVariantName());

            $this->orderItemQuantityModifier->modify($newItem, $orderItem->getQuantity());
            $this->orderModifier->addToOrder($reorder, $newItem);
        }
    }
}
