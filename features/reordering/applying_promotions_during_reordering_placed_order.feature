@admin_reordering @ui
Feature: Applying promotions during reordering previously placed order
    In order to reorder the same order with the same promotions if they are still available as a Customer placed before
    As an Administrator
    I want to be able to reorder a previously placed order in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100.00"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a promotion "Holiday promotion"
        And the promotion gives "$50.00" discount to every order with quantity at least 3
        And there is a customer account "jon.snow@the-wall.com"
        And a customer "jon.snow@the-wall.com" placed an order "#00000666"
        And the customer bought 3 "Stark Coat" products
        And the customer "Jon Snow" addressed it to "Frost Alley", "90210" "Ankh-Morpork" in the "United States"
        And for the billing address of "Ned Stark" in the "Elm Street", "444" "Rivendell", "United States"
        And the customer chose "Free" shipping method with "Cash on Delivery" payment
        And I am logged in as an administrator

    Scenario: Applying promotion during reordering previously placed order
        When I reorder the order "#00000666"
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And the order's total should be "$250.00"
        And the order's promotion total should be "-$50.00"

    @javascript
    Scenario: Not applying promotion during reordering previously placed order
        When I reorder the order "#00000666"
        And I change quantity of item "Stark Coat" to 2
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And the order's total should be "$200.00"
        And the order's promotion total should be "$0.00"

    Scenario: Not applying expired promotion during reordering previously placed order
        Given this promotion has already expired
        When I reorder the order "#00000666"
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And the order's total should be "$300.00"
        And the order's promotion total should be "$0.00"
