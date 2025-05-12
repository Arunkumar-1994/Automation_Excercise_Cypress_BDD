import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";
import LoginPage from "../../support/pageObjects/loginPage";
import { faker } from "@faker-js/faker";
import SignUpPage from "../../support/pageObjects/signUpPage";
import { getDayRandomNumber } from "../../support/CommonGenericFunction";

const homePage = new HomePage();
const loginPage = new LoginPage();
const signUpPage = new SignUpPage();

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
  cy.waitUntil(() =>
    homePage
      .getActivePara()
      .should(
        "have.text",
        "All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills."
      )
  );
  cy.waitUntil(() => homePage.getTestCaseButton().should("be.enabled"));
  cy.waitUntil(() =>
    homePage.getAPIlistForPracticeButton().should("be.enabled")
  );
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
  cy.waitUntil(() => loginPage.getSignUpFormContentBox().should("be.visible"));
  cy.waitUntil(() =>
    loginPage.getSignUpFormText().should("have.text", "New User Signup!")
  );
  cy.waitUntil(() => loginPage.enterUserName().should("be.visible"));
  cy.waitUntil(() => loginPage.enterSignUpEmailAddress().should("be.visible"));
  cy.waitUntil(() => loginPage.clickSignUpButton().should("be.visible"));
});

And("enter the name and email", () => {
  const users = Array.from({ length: 1 }, () => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
  }));
  users.forEach((user) => {
    cy.waitUntil(() => loginPage.enterUserName().type(user.username));
    cy.waitUntil(() => loginPage.enterSignUpEmailAddress().type(user.email));
    //    userDatas.userName = user.username;
    //    userDatas.userEmail = user.email;
  });
  cy.waitUntil(() => loginPage.clickSignUpButton().click());
});

And("enter the all personal details", () => {
  cy.url().should("include", "/signup");
  cy.waitUntil(() =>
    signUpPage
      .getAccountInformationHeadingText()
      .should("have.text", "Enter Account Information")
  );
  cy.waitUntil(() => signUpPage.selectMrTitle().click());
  // cy.waitUntil(()=>signUpPage.getDisplayEmailName().then((text)=>visibleUserMail=getDisplayEmailName().text());
  // let visibleUserName  = cy.waitUntil(()=>signUpPage.getDisplayName().should('have.attr','value', `${username}`));
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
    cy.waitUntil(() => signUpPage.clickCreateAccountButton().click());
  });

  Then("user should view the success message", () => {
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
  });

  And("click on continue button", () => {
    cy.waitUntil(() => signUpPage.clickContinueButton().click());
  });

  Then("verify the user is logged in", () => {
    cy.waitUntil(() =>
      homePage.clickDeleteAccountButton().should("be.visible")
    );
    cy.waitUntil(() => homePage.getLoggedInAsButton().should("be.visible"));
    cy.waitUntil(() => homePage.clickLogoutButton().should("be.visible"));
  });

  When("clcik on delete account button", () => {
    cy.waitUntil(() => homePage.clickDeleteAccountButton().click());
  });

  Then("the user should able to view the account deleted message", () => {
    cy.url().should("include", "/delete_account");
    cy.waitUntil(() =>
      signUpPage
        .getSucces_Delete_MessageHeading()
        .should("be.visible")
        .should("have.text", "Account Deleted!")
    );
    cy.waitUntil(() =>
      signUpPage
        .getCongratulation_Delete_Message()
        .should("be.visible")
        .should("have.text", "Your account has been permanently deleted!")
    );
    cy.waitUntil(() =>
      signUpPage
        .getSuccessContentMessage()
        .should("be.visible")
        .should(
          "have.text",
          "You can create new account to take advantage of member privileges to enhance your online shopping experience with us."
        )
    );
    cy.waitUntil(() => signUpPage.clickContinueButton().click());
    cy.title().should("eq", "Automation Exercise");
    cy.waitUntil(() => homePage.getLogoVisible().should("be.visible"));
  });
});
