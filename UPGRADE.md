### UPGRADE FROM 0.14.0 TO 0.15.0

1. Support for Sylius 1.13 has been added, it is now the recommended Sylius version to use with the plugin.

2. Support for Sylius 1.11 has been dropped, upgrade your application to [Sylius 1.12](https://github.com/Sylius/Sylius/blob/master/UPGRADE-1.12.md).
   or to [Sylius 1.13](https://github.com/Sylius/Sylius/blob/master/UPGRADE-1.13.md).

3. Support for PHP 8.0 has been dropped.

### UPGRADE FROM 0.13.0 TO 0.14.0

1. Support for Sylius 1.10 has been dropped, upgrade your application to [Sylius 1.11](https://github.com/Sylius/Sylius/blob/master/UPGRADE-1.11.md)
   or to [Sylius 1.12](https://github.com/Sylius/Sylius/blob/master/UPGRADE-1.12.md) as this is the recommended Sylius version
   to use with AdminOrderCreationPlugin.

2. Support for Symfony 4.4 has been dropped.

3. Support for Symfony 6 has been added.

### UPGRADE FROM 0.12.X TO 0.13.0

1. Support for Sylius 1.9 has been dropped, upgrade your application to [Sylius 1.10](https://github.com/Sylius/Sylius/blob/master/UPGRADE-1.10.md)
   or to [Sylius 1.11](https://github.com/Sylius/Sylius/blob/master/UPGRADE-1.11.md) as this is the recommended Sylius version
   to use with AdminOrderCreationPlugin.

2. Support for Symfony 5 has been bumped up to 5.4.

3. Support for PHP 7.4 has been dropped.

### UPGRADE FROM 0.10 TO 0.11

1. Upgrade your application to [Sylius 1.9](https://github.com/Sylius/Sylius/blob/master/UPGRADE-1.9.md).

### UPGRADE FROM 0.9 TO 0.10

1. Upgrade your application to [Sylius 1.8](https://github.com/Sylius/Sylius/blob/master/UPGRADE-1.8.md).

1. Remove previously copied migration files (you may check migrations to remove [here](https://github.com/Sylius/AdminOrderCreationPlugin/pull/165)).

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
