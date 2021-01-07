@admin_order_creation_managing_orders
Feature: Previewing order before creation
    In order to be sure about details of the order I am placing
    As an Administrator
    I want to see order preview before placing it

    Background:
        Given the store operates on a single channel in "United States"
        And that channel allows to shop using "EUR" and "PLN" currencies
        And the store has locale "en_US"
        And the store has a product "Stark Coat" priced at "$100"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    @ui @javascript
    Scenario: Seeing order preview
        When I create a new order for "jon.snow@the-wall.com" and channel "United States"
        And I add "Stark Coat" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "English (United States)" locale
        And I select "Polish Zloty" currency
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place this order
        Then I should see preview of the order with total "PLN 100.00"
        And this order should contain "Stark Coat" product
        And its shipping total should be "PLN 0.00"
        And it should have one "Cash on Delivery" payment
        And it should have "English (United States)" locale
        And it should have "PLN" currency
        And I should be able to confirm order creation
