Feature: Validate the products functionlity

Background: launch the application

Given lauch the application and validate the home page

Scenario: Place an order register while checkout

When click addToCart button of first product
Then user should view the popmodal window
And click viewCart button
When click proceedToCheck button
Then user should view the register popup window
And click Login button
And register a new account
And enter all details
When click on create a account
Then user should viwe the success message
And click continue and redirect to the cart page
When click proceedToCheck button
And verify the user and product details
And click Place order button
And enter the card details 
When click pay and confirm order button
Then user should view the confirmation message
And click continue button

Scenario: Place an order register before checkout

When click signup_login button
Then user should create a account and fill the details.
And add the products
When click cart button
Then user should view the product detials in the cart page
When click proceedToCheck button
And verify the user and product details
And Enter description in comment text area
And click Place order button
And enter the card details 
When click pay and confirm order button
Then user should view the confirmation message
And click continue button


Scenario: Place an order login before checkout

When click signup_login button
And enter the email and password
And click login button
Then verify the user is logged in the application
And add the first products
When click cart button
Then user should view the product detials in the cart page
When click proceedToCheck button
And verify the user and product details
And Enter description in comment text area
And click Place order button
And enter the card details 
When click pay and confirm order button
Then user should view the confirmation message
And click continue button