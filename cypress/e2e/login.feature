Feature: Validating the login feature

Background: Lauch the application and click signup/login button

Given lauch the application and validate the home page
When click on Signup Login button

Scenario: Verify the user is able to login with valid user name and password

And enter the email and password
And click login button
Then verify the user is logged in the application

Scenario: Verify the user should not able to login with invalid user details.

And enter the invalid email and password
And click login button
Then user should receive an error message

Scenario: Verify the user is able to logout the application.

And enter the email and password
And click login button
And click logout button
Then user should redirect to the login page