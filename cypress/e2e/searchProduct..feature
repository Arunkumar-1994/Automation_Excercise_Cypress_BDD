Feature: Validating the search product fucntionality

Scenario: verify the user is able to search the product

Given lauch the application and validate the home page
When click the product option
Then user should view the product page
And enter the product name in the search bar
And click search icon
Then user should view the respective product details.