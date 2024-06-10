# CHANGELOG

## v0.15.0 (2024-06-10)

- [#199](https://github.com/Sylius/AdminOrderCreationPlugin/issues/199) Sylius 1.13 ([@Prometee](https://github.com/Prometee))
- [#200](https://github.com/Sylius/AdminOrderCreationPlugin/issues/200) [Maintenance] Add PHP version to requirements + adjust Kernel and bundles configuration ([@GSadee](https://github.com/GSadee))

## v0.14.0 (2022-12-15)

- [#186](https://github.com/Sylius/AdminOrderCreationPlugin/issues/186) [Maintenance] Bump up Sylius versions to fix the build ([@GSadee](https://github.com/GSadee))
- [#185](https://github.com/Sylius/AdminOrderCreationPlugin/issues/185) [GitHub Actions] Configure workflow to run on the workflow_dispatch event ([@GSadee](https://github.com/GSadee))
- [#187](https://github.com/Sylius/AdminOrderCreationPlugin/issues/187) [Maintenance] Support PHP 8.1 ([@GSadee](https://github.com/GSadee))
- [#188](https://github.com/Sylius/AdminOrderCreationPlugin/issues/188) [Maintenance] Allow flex plugin during plugin installation ([@lchrusciel](https://github.com/lchrusciel))
- [#190](https://github.com/Sylius/AdminOrderCreationPlugin/issues/190) [GitHub Actions] Configure global flex to fix the build ([@GSadee](https://github.com/GSadee))
- [#191](https://github.com/Sylius/AdminOrderCreationPlugin/issues/191) Drop support for Sylius 1.10 ([@GSadee](https://github.com/GSadee))
- [#193](https://github.com/Sylius/AdminOrderCreationPlugin/issues/193) Support Symfony 6 and Sylius 1.12 ([@TheMilek](https://github.com/TheMilek))
- [#194](https://github.com/Sylius/AdminOrderCreationPlugin/issues/194) Fix HTTP protocol for FOSJSRouting generation ([@coldic3](https://github.com/coldic3))

## v0.13.0 (2022-02-25)

- [#183](https://github.com/Sylius/AdminOrderCreationPlugin/issues/183) [Maintenance] Upgrade dependencies ([@GSadee](https://github.com/GSadee))
- [#182](https://github.com/Sylius/AdminOrderCreationPlugin/issues/182) Remove useless Migrations step from README.md ([@HerveEmagma](https://github.com/HerveEmagma))
- [#168](https://github.com/Sylius/AdminOrderCreationPlugin/issues/168) Shouldn't have payment limit on order ([@kayue](https://github.com/kayue))
- [#158](https://github.com/Sylius/AdminOrderCreationPlugin/issues/158) Improved: OrderPaymentLinkSender ([@igormukhingmailcom](https://github.com/igormukhingmailcom))
- [#176](https://github.com/Sylius/AdminOrderCreationPlugin/issues/176) Fix state machine exception on order creation ([@maciekpaprocki](https://github.com/maciekpaprocki), [@GSadee](https://github.com/GSadee))

## v0.12.3 (2021-10-28)

- [#179](https://github.com/Sylius/AdminOrderCreationPlugin/issues/179) [Maintenance] Conflict with doctrine/dbal ^3.0 due to lack of json_array support ([@lchrusciel](https://github.com/lchrusciel))
- [#177](https://github.com/Sylius/AdminOrderCreationPlugin/issues/177) [API] Add missing "Autocomplete" serialization group ([@lchrusciel](https://github.com/lchrusciel))
- [#178](https://github.com/Sylius/AdminOrderCreationPlugin/issues/178) [README] Improve installation guide ([@lchrusciel](https://github.com/lchrusciel))

## v0.12.2 (2021-08-10)

- [#174](https://github.com/Sylius/AdminOrderCreationPlugin/issues/174) [Maintenance] Remove redundant migrations ([@Arminek](https://github.com/Arminek))

## v0.12.1 (2021-07-30)

- [#173](https://github.com/Sylius/AdminOrderCreationPlugin/issues/173) Really allow for Sylius 1.9 and 1.10 ([@pamil](https://github.com/pamil))

## v0.12.0 (2021-07-29)

- [#170](https://github.com/Sylius/AdminOrderCreationPlugin/issues/170) Upgrade to Sylius 1.10 and Symfony >5.2 ([@Roshyo](https://github.com/Roshyo), [@Zales0123](https://github.com/Zales0123))

## v0.11.0 (2021-04-15)

- [#167](https://github.com/Sylius/AdminOrderCreationPlugin/issues/167) Upgrade to Sylius 1.9 ([@GSadee](https://github.com/GSadee))

## v0.10.0 (2021-04-14)

- [#160](https://github.com/Sylius/AdminOrderCreationPlugin/issues/160) Use Autocomplete serialization group (gain -75% of number of SQL requests) ([@jacquesbh](https://github.com/jacquesbh))
- [#164](https://github.com/Sylius/AdminOrderCreationPlugin/issues/164) Initialize GitHub actions ([@clem21](https://github.com/clem21), [@GSadee](https://github.com/GSadee))
- [#165](https://github.com/Sylius/AdminOrderCreationPlugin/issues/165) Upgrade to Sylius 1.8 ([@GSadee](https://github.com/GSadee))

## v0.9.1 (2020-11-03)

#### Details

- [#159](https://github.com/Sylius/AdminOrderCreationPlugin/issues/159) [Behat] Use descriptor to find products with autocomplete ([@pamil](https://github.com/pamil))

## v0.9.0 (2020-07-15)

#### TL;DR:

- Repositories refactored to traits in order to make overriding repositories easier

#### Added

- [#146](https://github.com/Sylius/AdminOrderCreationPlugin/issues/146) Extracted: Repository methods to traits (fixes #140) ([@igormukhingmailcom](https://github.com/igormukhingmailcom))

## v0.8.0 (2020-07-15)

#### TL;DR:

- Added support for PHP 7.3/7.4 & Sylius 1.7
- Dropped support for PHP 7.2 & Sylius 1.6
- Added possibility to have no payment methods

##### Added

- [#152](https://github.com/Sylius/AdminOrderCreationPlugin/issues/152) Allow to have no payment method ([@jacquesbh](https://github.com/jacquesbh), [@Roshyo](https://github.com/Roshyo))

#### Changed

- [#137](https://github.com/Sylius/AdminOrderCreationPlugin/issues/137) Add migrations from Sylius-Standard to test application ([@GSadee](https://github.com/GSadee))
- [#138](https://github.com/Sylius/AdminOrderCreationPlugin/issues/138) Change test server to Symfony server ([@AdamKasp](https://github.com/AdamKasp), [@Zales0123](https://github.com/Zales0123))
- [#142](https://github.com/Sylius/AdminOrderCreationPlugin/issues/142) Use stable Sylius 1.6 ([@Zales0123](https://github.com/Zales0123))
- [#124](https://github.com/Sylius/AdminOrderCreationPlugin/issues/124) Allow to overwrite order created email template ([@Zales0123](https://github.com/Zales0123))
- [#157](https://github.com/Sylius/AdminOrderCreationPlugin/issues/157) Upgrade Sylius & PHP ([@Roshyo](https://github.com/Roshyo))

#### Fixed

- [#136](https://github.com/Sylius/AdminOrderCreationPlugin/issues/136) [Admin][Order] Make templates compatible with Sylius alpha ([@GSadee](https://github.com/GSadee))
