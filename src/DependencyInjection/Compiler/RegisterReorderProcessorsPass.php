<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\DependencyInjection\Compiler;

use Sylius\Bundle\ResourceBundle\DependencyInjection\Compiler\PrioritizedCompositeServicePass;

final class RegisterReorderProcessorsPass extends PrioritizedCompositeServicePass
{
    public function __construct()
    {
        parent::__construct(
            'Sylius\AdminOrderCreationPlugin\ReorderProcessing\CompositeReorderProcessor',
            'Sylius\AdminOrderCreationPlugin\ReorderProcessing\CompositeReorderProcessor',
            'sylius_admin_order_creation.reorder_processor',
            'addProcessor',
        );
    }
}
