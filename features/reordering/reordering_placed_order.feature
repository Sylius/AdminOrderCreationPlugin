@reordering @ui @javascript
Feature: Reordering previously placed order
    In order to reorder the same order as a Customer placed before in the name of this Customer
    As an Administrator
    I want to be able to reorder a previously placed order in Admin panel

    Background:
        Given the store operates on a single channel in "United States"
        And the store has a product "Stark Coat" priced at "$100.00"
        And the store has a product "Lannister Banner" priced at "$40.00"
        And the store ships everywhere for free
        And the store allows paying with "Cash on Delivery"
        And there is a customer account "jon.snow@the-wall.com"
        And the customer "jon.snow@the-wall.com" placed an order "#00000666"
        And the customer bought a single "Angel T-Shirt"
        And the customer addressed it to "Lucifer Morningstar", "Seaside Fwy", "90802" "Los Angeles" in the "United States", "Arkansas"
        And for the billing address of "Mazikeen Lilim" in the "Pacific Coast Hwy", "90806" "Los Angeles", "United States", "Arkansas"
        And the customer chose "Free" shipping method with "Cash on Delivery" payment
        And I am logged in as an administrator

    @todo
    Scenario: Having billing address section filled with address information taken from previously placed order
        When I browse orders
        And I reorder the order "#00000666"
        Then the address "Mazikeen Lilim", "Pacific Coast Hwy", "90806", "Los Angeles", "United States", "Arkansas" should be filled as billing address

    @todo
    Scenario: Having shipping address section filled with address information taken from previously placed order
        When I browse orders
        And I reorder the order "#00000666"
        Then the address "Lucifer Morningstar", "Seaside Fwy", "90802", "Los Angeles", "United States", "Arkansas" should be filled as shipping address
