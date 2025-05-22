Feature: validate the category proucts for women,men,kids

Scenario: verify the user is able to view the category products

Given lauch the application and validate the home page
And user can view the category list
When click on women category and click tops option
Then user should view the womentops products
When click on men category and click jeans option
Then user should view the men jeans products
