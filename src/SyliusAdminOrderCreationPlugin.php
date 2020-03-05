<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin;

use Sylius\AdminOrderCreationPlugin\DependencyInjection\Compiler\RegisterReorderProcessorsPass;
use Sylius\Bundle\CoreBundle\Application\SyliusPluginTrait;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class SyliusAdminOrderCreationPlugin extends Bundle
{
    use SyliusPluginTrait;

    public function build(ContainerBuilder $container): void
    {
        # Nothing was actually changed
        $container->addCompilerPass(new RegisterReorderProcessorsPass());
    }
}
