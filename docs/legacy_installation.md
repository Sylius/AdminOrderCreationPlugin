### Legacy installation (without Symfony Flex)

1. Require plugin with composer:

    ```bash
    composer require sylius/admin-order-creation-plugin
    ```

2. Import configuration to `app/config/config.yml`:

    ```yaml
    imports:
        - { resource: "@SyliusAdminOrderCreationPlugin/Resources/config/app/config.yml" }
    ```

3. Import routing to `app/config/routing.yml`:

    ```yaml
    sylius_admin_order_creation:
        resource: "@SyliusAdminOrderCreationPlugin/Resources/config/app/routing.yml"
    ```

4. Add plugin class to your `AppKernel`:

    ```php
    $bundles = [
        new \FOS\JsRoutingBundle\FOSJsRoutingBundle(),
        new \Sylius\AdminOrderCreationPlugin\SyliusAdminOrderCreationPlugin(),
    ];
    ```

5. Copy Sylius templates overridden in plugin to your templates directory (e.g `app/Resources/SyliusAdminBundle/views/`):

    ```bash
    mkdir -p app/Resources/SyliusAdminBundle/views/
    cp -R vendor/sylius/admin-order-creation-plugin/src/Resources/views/SyliusAdminBundle/* app/Resources/SyliusAdminBundle/views/
    ```

6. Override repositories

    As shown [here](tests/Application/Doctrine/ORM)
    and [here](tests/Application/config/packages/_sylius.yaml).

7. Copy plugin migrations to your migrations directory (e.g. `src/Migrations`) and apply them to your database:

    ```bash
    cp -R vendor/sylius/admin-order-creation-plugin/migrations/* src/Migrations
    bin/console doctrine:migrations:migrate
    ```

8. Install `FOSJsRoutingBundle` assets:

    ```bash
    bin/console assets:install --symlink web
    ```

8. Clear cache:

    ```bash
    bin/console cache:clear
    ```
