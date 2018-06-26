# SyliusAdminOrderCreationPlugin

SyliusAdminOrderCreationPlugin allows to create order in Admin panel.

## Installation

Require plugin with composer:

```bash
composer require sylius/admin-order-creation-plugin
```

Import configuration:

```yaml
imports:
    - { resource: "@SyliusAdminOrderCreationPlugin/Resources/config/app/config.yml" }
```

Import routing:

````yaml
sylius_admin_order_creation:
    resource: "@SyliusAdminOrderCreationPlugin/Resources/config/app/routing.yml"
````

Add plugin class to your `AppKernel`:

```php
$bundles = [
    new \FOS\JsRoutingBundle\FOSJsRoutingBundle(), //used by plugin
    new \Sylius\AdminOrderCreationPlugin\SyliusAdminOrderCreationPlugin(),
];
```

Copy templates from

```
vendor/sylius/admin-order-creation-plugin/src/Resources/views/SyliusAdminBundle/
```
to
```
app/Resources/SyliusAdminBundle/views/
```

Copy migrations from

```
vendor/sylius/admin-order-creation-plugin/migrations/
```
to your migrations directory and run `bin/console doctrine:migrations:migrate`

Install FOSJsRoutingBundle assets:

```
bin/console assets:install --symlink web
```

Clear cache:

```bash
bin/console cache:clear
```
