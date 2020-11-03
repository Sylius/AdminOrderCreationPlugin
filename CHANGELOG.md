# CHANGELOG

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
