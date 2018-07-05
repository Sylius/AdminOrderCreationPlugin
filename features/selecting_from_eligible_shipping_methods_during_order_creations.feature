@managing_orders
Feature: Selecting from eligible shipping methods during order creations
    In order not to place an order with invalid shipping method
    As an Administrator
    I want to have only eligible shipping methods available for selection

    Background:
        Given the store operates on a single channel in "United States"
        And the store has "Over-sized" and "Standard" shipping category
        And the store has a product "Picasso T-shirt" priced at "$19.99"
        And this product belongs to "Standard" shipping category
        And the store has a product "Rocket T-shirt" priced at "$20.00"
        And this product belongs to "Standard" shipping category
        And the store has a product "Bosch T-shirt" priced at "$20.00"
        And this product belongs to "Over-sized" shipping category
        And the store has "Raven Post" shipping method with "$10.00" fee
        And this shipping method requires that all units match to "Standard" shipping category
        And the store has "Invisible Post" shipping method with "$30.00" fee
        And this shipping method requires at least one unit matches to "Over-sized" shipping category
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    @ui @javascript
    Scenario: Being able to select only shipping methods eligible for ordering items
        When I create a new order for "jon.snow@the-wall.com"
        And I add "Rocket T-shirt" to this order
        And I add "Picasso T-shirt" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        Then I should have "Raven Post" shipping method available to select
        Then I should not have "Invisible Post" shipping method available to select

    @ui @javascript
    Scenario: Being able to select only shipping methods eligible after changing order items
        When I create a new order for "jon.snow@the-wall.com"
        And I add "Rocket T-shirt" to this order
        And I add "Picasso T-shirt" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Raven Post" shipping method
        And I add "Bosch T-shirt" to this order
        Then I should not have "Raven Post" shipping method available to select
        Then I should have "Invisible Post" shipping method available to select

    @ui @javascript
    Scenario: Not being able to select shipping method without shipping country selected
        When I create a new order for "jon.snow@the-wall.com"
        And I add "Rocket T-shirt" to this order
        And I add "Picasso T-shirt" to this order
        And I want to select shipping method
        Then I should be notified that I need to add some items and shipping address to select from eligible shipping method

    @ui @javascript
    Scenario: Not being able to select shipping method with no items in the order
        When I create a new order for "jon.snow@the-wall.com"
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I want to select shipping method
        Then I should be notified that I need to add some items and shipping address to select from eligible shipping method
