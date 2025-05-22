Feature: Validating the search product fucntionality

Background: searched products

Given lauch the application and validate the home page
When click the product option
Then user should view the product page
And enter the product name in the search bar
And click search icon
Then user should view the respective product details.

#Scenario: verify the user is able to search the product

Scenario: verify the user is able to search products and verify cart after login

And addToCart the first product
And addToCart the second product
When click view cart button
Then user should view the addToCart page with searched product details
And click on Signup Login button
And enter the email and password
When click login button
Then verify the user is logged in the application
When click cart button
Then user should view the addToCart page with searched product details


