<?php

declare(strict_types=1);

namespace Sylius\AdminOrderCreationPlugin\Doctrine\ORM;

use Sylius\Component\Core\Repository\ProductVariantRepositoryInterface as BaseProductVariantRepositoryInterface;

interface ProductVariantRepositoryInterface extends BaseProductVariantRepositoryInterface
{
    public function findByPhrase(string $phrase, string $locale): array;
}
