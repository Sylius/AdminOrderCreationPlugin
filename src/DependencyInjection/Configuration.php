<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

final class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('sylius_admin_order_creation_plugin');
        $rootNode = $treeBuilder->getRootNode();

        return $treeBuilder;
    }
}
