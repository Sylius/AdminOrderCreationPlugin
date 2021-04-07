<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\ReorderProcessing;

use Sylius\Component\Core\Model\OrderInterface;
use Zend\Stdlib\PriorityQueue;

final class CompositeReorderProcessor implements ReorderProcessor
{
    /** @var PriorityQueue|ReorderProcessor[] */
    private $reorderProcessors;

    public function __construct()
    {
        $this->reorderProcessors = new PriorityQueue();
    }

    public function addProcessor(ReorderProcessor $orderProcessor, int $priority = 0): void
    {
        $this->reorderProcessors->insert($orderProcessor, $priority);
    }

    public function process(OrderInterface $order, OrderInterface $reorder): void
    {
        foreach ($this->reorderProcessors as $reorderProcessor) {
            $reorderProcessor->process($order, $reorder);
        }
    }
}
