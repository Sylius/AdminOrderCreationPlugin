@admin_order_creation_managing_orders @stipe
Feature: Creating order without payment if order is free
    In order to place a free order in the name of a Customer
    As an Administrator
    I want to be able to create an order without payment in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$0"
        And the store ships everywhere for free
        And there is a customer account "jon.snow@the-wall.com"
        And I am logged in as an administrator

    @ui @javascript @email
    Scenario: Creating an order without payment for an existing customer
        When I create a new order for "jon.snow@the-wall.com" and channel "United States"
        And I add "Stark Coat" to this order
        And I specify this order shipping address as "Ankh Morpork", "Frost Alley", "90210", "United States" for "Jon Snow"
        And I select "Free" shipping method
        And I place and confirm this order
        Then I should be notified that order has been successfully created
        And there should be no payment displayed next to order's payment
        And there should be no payment link sent to "jon.snow@the-wall.com"
