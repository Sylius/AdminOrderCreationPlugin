@managing_orders
Feature: Creating order with different billing address
    In order to place an order in the name of a Customer
    As an Administrator
    I want to be able to create an order with different shipping and billing addresses in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100"
        And the store has a product "Lannister Banner" priced at "$40"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    @ui @javascript
    Scenario: Creating an order with both addresses specified
        When I create a new order for "jon.snow@the-wall.com"
        And I add "Stark Coat" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I specify this order billing address as "Rivendell", "Elm Street", "444", "United States" for "Ned Stark"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place this order
        Then I should be notified that order has been successfully created
        And there should be one not paid nor shipped order for "jon.snow@the-wall.com" in the registry
