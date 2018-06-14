@reordering @ui
Feature: Reordering previously placed order
    In order to reorder the same order as a Customer placed before in the name of this Customer
    As an Administrator
    I want to be able to reorder a previously placed order in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100.00"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And a customer "jon.snow@the-wall.com" placed an order "#00000666"
        And the customer bought a single "Stark Coat"
        And the customer "Jon Snow" addressed it to "Frost Alley", "90210" "Ankh-Morpork" in the "United States"
        And for the billing address of "Ned Stark" in the "Elm Street", "444" "Rivendell", "United States"
        And the customer chose "Free" shipping method with "Cash on Delivery" payment
        And I am logged in as an administrator

    Scenario: Having billing address section filled with address information taken from previously placed order
        When I reorder the order "#00000666"
        Then the address "Ned Stark", "Elm Street", "444", "Rivendell", "United States" should be filled as billing address

    Scenario: Having shipping address section filled with address information taken from previously placed order
        When I reorder the order "#00000666"
        Then the address "Jon Snow", "Frost Alley", "90210", "Ankh-Morpork", "United States" should be filled as shipping address
