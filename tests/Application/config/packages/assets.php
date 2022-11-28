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

use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;

return static function (ContainerConfigurator $containerConfigurator): void {
    $containerConfigurator->extension('framework', [
        'assets' => [
            'packages' => [
                'admin' => [
                    'json_manifest_path' => '%kernel.project_dir%/public/build/admin/manifest.json',
                ],
                'shop' => [
                    'json_manifest_path' => '%kernel.project_dir%/public/build/shop/manifest.json',
                ],
                'app.admin' => [
                    'json_manifest_path' => '%kernel.project_dir%/public/build/app/admin/manifest.json',
                ],
                'app.shop' => [
                    'json_manifest_path' => '%kernel.project_dir%/public/build/app/shop/manifest.json',
                ],
            ],
        ],
    ]);
};
