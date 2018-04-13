<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin;

use Sylius\Bundle\CoreBundle\Application\SyliusPluginTrait;
use Symfony\Component\HttpKernel\Bundle\Bundle;

final class SyliusAdminOrderCreationPlugin extends Bundle
{
    use SyliusPluginTrait;
}
