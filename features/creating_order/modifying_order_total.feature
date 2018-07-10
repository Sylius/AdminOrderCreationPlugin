@managing_orders
Feature: Modifying order total
    In order to place an order in the name of a Customer with custom price
    As an Administrator
    I want to be able to modify creating order total

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    @ui @javascript
    Scenario: Modify order total
        When I create a new order for "jon.snow@the-wall.com"
        And I add 5 of "Stark Coat" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I place this order
        And I lower order price by "$10.00"
        And I confirm this order
        Then I should be notified that order has been successfully created
        And the order's total should be "$123.45"

    @ui @javascript
    Scenario: Not being able to place order with price below 0
        When I create a new order for "jon.snow@the-wall.com"
        And I add 5 of "Stark Coat" to this order
        And I specify this order shipping address as "Ankh-Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Free" shipping method
        And I select "Cash on Delivery" payment method
        And I lower order price by "-$10.00"
        And I place and confirm this order
        Then I should be notified that order discount cannot be below 0
