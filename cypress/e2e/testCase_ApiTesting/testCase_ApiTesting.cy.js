import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";
import TestCases_apiTestingPage from "../../support/pageObjects/testCases_ApiTestingPage";

const homePage = new HomePage();
const testCases_apiTestingPage = new TestCases_apiTestingPage();

let data = {};
beforeEach(() => {
  cy.fixture("example").then(function (jsonData) {
    data = jsonData;
  });
});

Given("lauch the application and validate the home page", () => {
  cy.visit("https://www.automationexercise.com/");
  cy.title().should("eq", "Automation Exercise");
  cy.waitUntil(() => homePage.getLogoVisible().should("be.visible"));
  cy.waitUntil(() =>
    homePage
      .getActiveSentence()
      .should(
        "have.text",
        "Full-Fledged practice website for Automation Engineers"
      )
  );
});

When("click on test cases option",()=>{
    cy.waitUntil(()=>homePage.clickTestCasesButton().should('be.visible').click());
})


Then("user should view the test cases list",()=>{
    cy.url().should('include','/test_cases');
    cy.waitUntil(()=>testCases_apiTestingPage.getApiTesting_TestCasesHeadingText().should('be.visible').should('have.text','Test Cases'))
    cy.waitUntil(()=>testCases_apiTestingPage.getTestCase_ApiSentence().should('be.visible').should('have.text','Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:'));
    cy.waitUntil(()=>testCases_apiTestingPage.getLengthofApiTestingTestCases().should('have.length','26'));
})



When("click on api testing option",()=>{
    cy.waitUntil(()=>homePage.clickApiTestngButton().should('be.visible').click());
})

Then("user should view the api testing test cases list",()=>{
    cy.url().should('include','/api_list');
    cy.waitUntil(()=>testCases_apiTestingPage.getApiTesting_TestCasesHeadingText().should('be.visible').should('have.text','APIs List for practice'))
    cy.waitUntil(()=>testCases_apiTestingPage.getTestCase_ApiSentence().should('be.visible').should('have.text','Below is the list of APIs for you to practice the API testing in Automation. Click on the scenario for detailed API:'));
    cy.waitUntil(()=>testCases_apiTestingPage.getLengthofApiTestingTestCases().should('have.length','14'));
})