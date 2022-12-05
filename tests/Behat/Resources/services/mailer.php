<?php

/*
 * This file is part of the Sylius package.
 *
 * (c) Paweł Jędrzejewski
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

declare(strict_types=1);

namespace Symfony\Component\DependencyInjection\Loader\Configurator;

use Sylius\Bundle\CoreBundle\Application\Kernel as SyliusKernel;

return function (ContainerConfigurator $configurator) {
    if (SyliusKernel::MINOR_VERSION > 11) {
        return;
    }

    $services = $configurator->services();

    $services
        ->alias('sylius.behat.context.hook.mailer', 'sylius.behat.context.hook.email_spool')
        ->public()
    ;
};
