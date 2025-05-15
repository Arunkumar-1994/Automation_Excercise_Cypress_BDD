Feature: validate the Test case and Api testing functionality

Background: Launch the application
Given lauch the application and validate the home page

Scenario: Verify the user is able to view the test cases list
When click on test cases option
Then user should view the test cases list

Scenario: Verify the user is able to view the Api testing lists
When click on api testing option
Then user should view the api testing test cases list