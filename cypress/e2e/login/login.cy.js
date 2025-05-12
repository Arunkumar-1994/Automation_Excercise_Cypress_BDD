import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../support/pageObjects/homePage';
import LoginPage from "../../support/pageObjects/loginPage";


const homePage = new HomePage();
const loginPage = new LoginPage();


let data = {};

beforeEach(() => {
    cy.fixture('example').then(function (jsonData) {
        data = jsonData
    })
})

Given("lauch the application and validate the home page",()=>{
cy.visit("https://www.automationexercise.com/");
    cy.title().should('eq','Automation Exercise');
    cy.waitUntil(()=>homePage.getLogoVisible().should('be.visible'));
    cy.waitUntil(() =>
    homePage
      .getActiveSentence()
      .should(
        "have.text",
        "Full-Fledged practice website for Automation Engineers"
      )
)
});
  When("click on Signup Login button", () => {
    cy.waitUntil(() => homePage.clickLoginButton().should("be.visible").click());
    cy.url().should("include", "/login");
    cy.waitUntil(() => loginPage.getLoginFormContentBox().should("be.visible"));
    cy.waitUntil(() =>
      loginPage.getLoginFormText().should("have.text", "Login to your account")
    );
    cy.waitUntil(() => loginPage.enterEmailAddress().should("be.enabled"));
    cy.waitUntil(() => loginPage.enterPassword().should("be.visible"));
    cy.waitUntil(() => loginPage.clickLoginButton().should("be.enabled"));
});


And("enter the email and password",()=>{
    cy.waitUntil(() => loginPage.enterEmailAddress().type('Raoul.Veum14@yahoo.com'));
    cy.waitUntil(() => loginPage.enterPassword().type("Pa55w0rd!"));    
})

And("click login button",()=>{
    cy.waitUntil(() => loginPage.clickLoginButton().click());
})

Then("verify the user is logged in the application",()=>{
    cy.waitUntil(() =>
      homePage.clickDeleteAccountButton().should("be.visible")
    );
    cy.waitUntil(() => homePage.getLoggedInAsButton().should("be.visible"));
    cy.waitUntil(() => homePage.clickLogoutButton().should("be.visible"));
})

And("enter the invalid email and password",()=>{
        cy.waitUntil(() => loginPage.enterEmailAddress().type('Raoul.Veum14@mink.com'));
        cy.waitUntil(() => loginPage.enterPassword().type("NewPa55w0rd!LO"));
})

Then("user should receive an error message",()=>{
    cy.waitUntil(()=>loginPage.getIncorrectEmailPasswordMessage().should('have.text','Your email or password is incorrect!'));
})

And("click logout button",()=>{
    cy.waitUntil(()=>homePage.clickLogoutButton().should('be.visible').click());
})

Then("user should redirect to the login page",()=>{
    cy.wait(2000);
    cy.url().should('include','/login');
    cy.waitUntil(()=>loginPage.clickLoginButton().should('be.visible'));
})