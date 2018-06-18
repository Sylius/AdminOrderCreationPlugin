@managing_orders
Feature: Creating order with multiple items
    In order to place an order in the name of a Customer
    As an Administrator
    I want to be able to create an order with multiple items in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100"
        And the store has a product "Lannister Banner" priced at "$40"
        And the store has a product "Greyjoy Boat" priced at "$1000"
        And the store has a product "Targaryen Shield" priced at "$200"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    @ui @javascript
    Scenario: Creating an expanded order
        When I create a new order for "jon.snow@the-wall.com"
        And I add 3 of "Stark Coat" to this order
        And I add "Lannister Banner" to this order
        And I add "Greyjoy Boat" to this order
        And I add 5 of "Targaryen Shield" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And the order's total should be "$2,340.00"
        And there should be one not paid nor shipped order for "jon.snow@the-wall.com" in the registry

    @ui @javascript
    Scenario: Being able to remove items during order creation
        When I create a new order for "jon.snow@the-wall.com"
        And I add 3 of "Stark Coat" to this order
        And I add "Lannister Banner" to this order
        And I add "Greyjoy Boat" to this order
        And I add 5 of "Targaryen Shield" to this order
        And I remove "Greyjoy Boat" from this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And the order's total should be "$1,340.00"
        And there should be one not paid nor shipped order for "jon.snow@the-wall.com" in the registry
