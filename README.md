<p align="center">
    <a href="https://sylius.com" target="_blank">
        <img src="https://demo.sylius.com/assets/shop/img/logo.png" />
    </a>
</p>

<h1 align="center">Admin Order Creation Plugin</h1>

<p align="center">This plugin allows to create an order in admin panel.</p>

![Screenshot showing the order creation page, Shipments&Payments section](docs/screenshot.png)

## Business value

So far it was up to the Customer to place an order using available product variants as well as payment and shipping
methods.

The whole process of placing an order is not that obvious, however. For some reason a Customer may feel a little bit
confused when a promotion is no longer available or shipping method is not eligible for given area. Here comes
Admin Order Creation Plugin.

Briefly speaking, it allows an Administrator to place or reorder an order for a Customer. It helps them solve
even more of Customer's fundamental problems and equips an Administrator with basic tools making creating an 
order possible.

Admin Order Creation Plugin processes are strongly based on standard Order model taken from SyliusCoreBundle.
The only thing that differs are order creation context and business requirements. Right now it is up to the Administrator
to provide a channel, locale and currency in which an Order is created. What's more, the Administrator is able to add
a discount for any item or the whole Order, which is, technically speaking, a new type of Sylius Adjustments.

After Admin Order creation it is listed on Order index view just like any other orders placed via Sylius.

## Installation

1. Require plugin with composer:

    ```bash
    composer require sylius/admin-order-creation-plugin
    ```

2. Import configuration:

    ```yaml
    imports:
        - { resource: "@SyliusAdminOrderCreationPlugin/Resources/config/app/config.yml" }
    ```

3. Import routing:

    ```yaml
    sylius_admin_order_creation:
        resource: "@SyliusAdminOrderCreationPlugin/Resources/config/app/routing.yml"
    ```

4. Add plugin class to your `AppKernel`:

    ```php
    $bundles = [
        new \FOS\JsRoutingBundle\FOSJsRoutingBundle(), //used by plugin
        new \Sylius\AdminOrderCreationPlugin\SyliusAdminOrderCreationPlugin(),
    ];
    ```

5. Copy templates from `vendor/sylius/admin-order-creation-plugin/src/Resources/views/SyliusAdminBundle/` 
   to `app/Resources/SyliusAdminBundle/views/`.

6. Copy migrations from `vendor/sylius/admin-order-creation-plugin/migrations/` 
   to your migrations directory and run `bin/console doctrine:migrations:migrate`.

7. Install `FOSJsRoutingBundle` assets:

    ```bash
    bin/console assets:install --symlink web
    ```

8. Clear cache:

    ```bash
    bin/console cache:clear
    ```

## Extension points

Admin Order Creation Plugin makes it possible to add custom discount during order creation - thus some of Order
Show templates need to be replaced with those placed in Resources/views package.

Payment link generation and sending process is based on logic placed in PaymentLinkCreationListener class. Thus, it can
be easily replaced with suitable implementation.

Adjustments set is not closed and strictly defined - adding custom adjustment means defining a new constant in
AdjustmentType class.

Significant part of Reorder Processing is inspired by official Sylius' 
[Customer Reorder Plugin](https://github.com/Sylius/CustomerReorderPlugin/). In case of the need for more processors,
just add new class implementing `ReorderProcessor` interface, declare it in `reorder_processing.xml` file and match
it with a proper tag.

Admin Order Creation process is based on Symfony Forms. To find out more about Symfony Forms extension possibilities, check out
[Symfony Docs](https://symfony.com/doc/current/form/create_form_type_extension.html).   
