### UPGRADE FROM 0.8 TO 0.9

1. Create `CustomerRepository` / `ProductVariantRepository` repositories
or adjust existing ones to use `CustomerRepositoryTrait` / `ProductVariantRepositoryTrait`
and implement `CustomerRepositoryInterface` / `ProductVariantRepositoryInterface`:

```php 
<?php
# src/Doctrine/ORM/CustomerRepository.php

declare(strict_types=1);

namespace App\Doctrine\ORM;

use Sylius\AdminOrderCreationPlugin\Doctrine\ORM\CustomerRepositoryInterface;
use Sylius\AdminOrderCreationPlugin\Doctrine\ORM\CustomerRepositoryTrait;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\CustomerRepository as BaseCustomerRepository;

final class CustomerRepository extends BaseCustomerRepository implements CustomerRepositoryInterface
{
    use CustomerRepositoryTrait;
}
```

```php 
<?php
# src/Doctrine/ORM/ProductVariantRepository.php

declare(strict_types=1);

namespace App\Doctrine\ORM;

use Sylius\AdminOrderCreationPlugin\Doctrine\ORM\ProductVariantRepositoryInterface;
use Sylius\AdminOrderCreationPlugin\Doctrine\ORM\ProductVariantRepositoryTrait;
use Sylius\Bundle\CoreBundle\Doctrine\ORM\ProductVariantRepository as BaseProductVariantRepository;

final class ProductVariantRepository extends BaseProductVariantRepository implements ProductVariantRepositoryInterface
{
    use ProductVariantRepositoryTrait;
}
```

1. Add config if not present yet:

```yaml
# config/packages/_sylius.yaml

sylius_customer:
    resources:
        customer:
            classes:
                repository: App\Doctrine\ORM\CustomerRepository

sylius_product:
    resources:
        product_variant:
            classes:
                repository: App\Doctrine\ORM\ProductVariantRepository
```

Check (ref. [PR #146](https://github.com/Sylius/AdminOrderCreationPlugin/pull/146)) if you need more context.
