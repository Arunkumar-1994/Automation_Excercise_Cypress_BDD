// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-wait-until";
import HomePage from "./pageObjects/homePage";
import LoginPage from "./pageObjects/loginPage";
import SignUpPage from "./pageObjects/signUpPage";
import PaymentPage from "./pageObjects/paymentPage";
import { faker } from "@faker-js/faker";
import { getDayRandomNumber } from "../support/CommonGenericFunction"

const homePage = new HomePage();
const loginPage = new LoginPage();
const signUpPage = new SignUpPage();
const paymentPage = new PaymentPage();


Cypress.Commands.add("popUpWindowForAddedToCart",()=>{
cy.waitUntil(()=>homePage.getConfirmDialogBox().should('be.visible'));
    cy.waitUntil(()=>homePage.getConfirmDialogBoxHeading().should('have.text','Added!'));
    cy.waitUntil(()=>homePage.getConfirmDialogSentence().should('have.text','Your product has been added to cart.'));
    cy.waitUntil(()=>homePage.clickViewCart_RegisterLoginButton().should('be.visible'));
    cy.waitUntil(()=>homePage.clickContinue_ContinueOnChartButton().should('be.visible')); 
})

Cypress.Commands.add("registerANewAccount",()=>{
    const users = Array.from({ length: 1 }, () => ({
        username: faker.internet.userName(),
        email: faker.internet.email(),
      }));
      users.forEach((user) => {
        cy.waitUntil(() => loginPage.enterUserName().type(user.username));
        cy.waitUntil(() => loginPage.enterSignUpEmailAddress().type(user.email));
    });
  cy.waitUntil(() => loginPage.clickSignUpButton().click());
})

Cypress.Commands.add("entetTheDetailsForNewUser",()=>{
    cy.url().should("include", "/signup");
          cy.waitUntil(() =>
            signUpPage
              .getAccountInformationHeadingText()
              .should("have.text", "Enter Account Information")
          );
          cy.waitUntil(() => signUpPage.selectMrTitle().click());
          cy.waitUntil(() => signUpPage.enterPassword().type("Pa55w0rd!"));
          cy.waitUntil(() =>
            signUpPage.clickDayOption().select(getDayRandomNumber(1, 31))
          );
          cy.waitUntil(() =>
            signUpPage.clickMonthOption().select(getDayRandomNumber(1, 12))
          );
          cy.waitUntil(() =>
            signUpPage.clickYearOption().select(getDayRandomNumber(1, 60))
          );
          cy.waitUntil(() => signUpPage.checktheNewsLetterOption().check());
          cy.waitUntil(() => signUpPage.checktheSpecialOfferOption().check());
          cy.waitUntil(() =>
            signUpPage
              .getAddressInformationHeadingText()
              .should("have.text", "Address Information")
          );
        
          const users = Array.from({ length: 1 }, () => ({
            fName: faker.person.firstName(),
            sName: faker.person.lastName(),
            companyName: faker.person.middleName(),
            addressFirst: faker.location.street(),
            addressSecond: faker.location.streetAddress(),
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
            mobileNumber: faker.phone.number(),
          }));
          users.forEach((user) => {
            cy.waitUntil(() => signUpPage.enterFirstName().type(user.fName));
            cy.waitUntil(() => signUpPage.enterLastName().type(user.sName));
            cy.waitUntil(() => signUpPage.enterCompanyName().type(user.companyName));
            cy.waitUntil(() => signUpPage.enterAddressFirst().type(user.addressFirst));
            cy.waitUntil(() =>
              signUpPage.enterAddressSecond().type(user.addressSecond)
            );
            cy.waitUntil(() => signUpPage.enterState().type(user.state));
            cy.waitUntil(() => signUpPage.enterCity().type(user.city));
            cy.waitUntil(() => signUpPage.enterZipcode().type(user.zipcode));
            cy.waitUntil(() => signUpPage.enterMobileNumber().type(user.mobileNumber));    
          });
})

Cypress.Commands.add("NewUserCreatedSuccesfullyMessage",()=>{
        cy.url().should("include", "account_created");
        cy.waitUntil(() =>
          signUpPage
            .getSucces_Delete_MessageHeading()
            .should("be.visible")
            .should("have.text", "Account Created!")
        );
        cy.waitUntil(() =>
          signUpPage
            .getCongratulation_Delete_Message()
            .should("be.visible")
            .should(
              "have.text",
              "Congratulations! Your new account has been successfully created!"
            )
        );
        cy.waitUntil(() =>
          signUpPage
            .getSuccessContentMessage()
            .should("be.visible")
            .should(
              "have.text",
              "You can now take advantage of member privileges to enhance your online shopping experience with us."
            )
        );
})

Cypress.Commands.add("enterCardDetails",()=>{
    cy.waitUntil(()=>paymentPage.enterNameOnCard().type("Jackson"));
    cy.waitUntil(()=>paymentPage.enterCardNumber().type("4242424242424242"));
    cy.waitUntil(()=>paymentPage.enterCvcNumber().type("2563"));
    cy.waitUntil(()=>paymentPage.enterExpiryMonth().type("11"));
    cy.waitUntil(()=>paymentPage.enterExpiryYear().type("2029"));
    
})

