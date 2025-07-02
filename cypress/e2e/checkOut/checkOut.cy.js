import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";
import CartPage from "../../support/pageObjects/cartPage";
import SignUpPage from "../../support/pageObjects/signUpPage";
import CheckOutPage from "../../support/pageObjects/checkOutPage";
import PaymentPage from "../../support/pageObjects/paymentPage";
import LoginPage from "../../support/pageObjects/loginPage";

const homePage = new HomePage();
const cartPage = new CartPage();
const signUpPage = new SignUpPage();
const checkOutPage = new CheckOutPage();
const paymentPage = new PaymentPage();
const loginPage = new LoginPage();

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

When("click addToCart button of first product", () => {
  cy.waitUntil(() => homePage.clickAddToCartOfFirstProduct().click());
});

Then("user should view the popmodal window", () => {
  cy.popUpWindowForAddedToCart();
});

And("click viewCart button", () => {
  cy.waitUntil(() => homePage.clickViewCart_RegisterLoginButton().click());
  cy.url().should("include", "view_cart");
  cy.waitUntil(() => cartPage.getTableHeading());
  cy.waitUntil(() => cartPage.getProducPrice().should("be.visible"));
  cy.waitUntil(() => cartPage.getQuantityOfProduct().should("be.visible"));

  cy.waitUntil(() => cartPage.getTotalPriceOfProduct().should("be.visible"));

  cy.waitUntil(() =>
    cartPage.clickProceedToCheckOutButton().should("be.visible")
  );
});

When("click proceedToCheck button", () => {
  cy.waitUntil(() => cartPage.clickProceedToCheckOutButton().click());
  cy.wait(3000);
});

Then("user should view the register popup window", () => {
  cy.waitUntil(() => homePage.getConfirmDialogBox().should("be.visible"));
  cy.waitUntil(() =>
    homePage.getConfirmDialogBoxHeading().should("have.text", "Checkout")
  );
  // cy.waitUntil(()=>homePage.clickViewCart_RegisterLoginButton().click());
});

And("click Login button", () => {
  cy.waitUntil(() =>
    homePage.clickViewCart_RegisterLoginButton().should("be.visible").click()
  );
  cy.url().should("include", "login");
});

And("register a new account", () => {
  cy.registerANewAccount();
});

And("enter all details", () => {
  cy.entetTheDetailsForNewUser();
});

When("click on create a account", () => {
  cy.waitUntil(() => signUpPage.clickCreateAccountButton().click());
});

Then("user should viwe the success message", () => {
  cy.NewUserCreatedSuccesfullyMessage();
});

And("click continue and redirect to the cart page", () => {
  cy.waitUntil(() => signUpPage.clickContinueButton().click());
  cy.waitUntil(() => homePage.clickCartButton().click());
});

And("verify the user and product details", () => {
  cy.waitUntil(() => cartPage.getTableHeading());
  cy.waitUntil(() =>
    checkOutPage.getDeliveryAddressSection().should("be.visible")
  );
  cy.waitUntil(() => checkOutPage.getDeliveryHeading().should("be.visible"));
  cy.waitUntil(() => checkOutPage.getFirst_LastName().should("be.visible"));
  cy.waitUntil(() =>
    checkOutPage.getAddressCityStatePostcode().should("be.visible")
  );
});

And("click Place order button", () => {
  cy.waitUntil(() => checkOutPage.getProductDescription().scrollIntoView());
  cy.waitUntil(() => checkOutPage.getProductDescription().should("be.visible"));
  cy.waitUntil(() => checkOutPage.getSingleProductPrice().should("be.visible"));
  cy.waitUntil(() => checkOutPage.getProductQuantity().should("be.visible"));
  cy.waitUntil(() => checkOutPage.getTotalPrice().should("be.visible"));
  cy.waitUntil(() =>
    checkOutPage
      .getOrderMessageHeading()
      .should(
        "have.text",
        "If you would like to add a comment about your order, please write it in the field below."
      )
  );
  cy.waitUntil(() =>
    checkOutPage.clickPlaceOrderButton().should("be.visible").click()
  );
});

And("enter the card details", () => {
  cy.enterCardDetails();
});
When("click pay and confirm order button", () => {
  cy.waitUntil(() => paymentPage.clickPayAndConfirmOrder().click());
});
Then("user should view the confirmation message", () => {
  cy.waitUntil(() => paymentPage.clickDownloadInvoice().should("be.visible"));
  cy.waitUntil(() =>
    signUpPage
      .getSucces_Delete_MessageHeading()
      .should("have.text", "Order Placed!")
  );
  cy.waitUntil(() =>
    signUpPage
      .getCongratulation_Delete_Message()
      .should("have.text", "Congratulations! Your order has been confirmed!")
  );
});
And("click continue button", () => {
  cy.waitUntil(() => signUpPage.clickContinueButton().click());
});

/**
 * Place an order register before checkout
 */

When("click signup_login button", () => {
  cy.waitUntil(() => homePage.clickLoginButton().click());
});

Then("user should create a account and fill the details.", () => {
  cy.registerANewAccount();
  cy.entetTheDetailsForNewUser();
  cy.waitUntil(() => signUpPage.clickCreateAccountButton().click());
  cy.NewUserCreatedSuccesfullyMessage();
});


And("add the products",()=>{
    cy.waitUntil(() => signUpPage.clickContinueButton().click());
    cy.waitUntil(() => homePage.clickAddToCartOfFirstProduct().click());
})

When("click cart button",()=>{
    cy.waitUntil(()=>homePage.clickCartButton().click());
});

Then("user should view the product detials in the cart page",()=>{
  cy.url().should("include", "view_cart");
  cy.waitUntil(() => cartPage.getTableHeading());
  cy.waitUntil(() => cartPage.getProducPrice().should("be.visible"));
  cy.waitUntil(() => cartPage.getQuantityOfProduct().should("be.visible"));
  cy.waitUntil(() => cartPage.getTotalPriceOfProduct().should("be.visible"));
  cy.waitUntil(() =>
    cartPage.clickProceedToCheckOutButton().should("be.visible")
  );
})

And("Enter description in comment text area",()=>{
    cy.waitUntil(()=>checkOutPage.enterDescriptionMessage().type('The product is looking good. Nice to use it. It has different colors.'));
})

/**
 * Scenario 3:
 */

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

And("add the first products",()=>{cy.waitUntil(() => homePage.clickAddToCartOfFirstProduct().click());})

And("click on the Place order button",()=>{
   cy.waitUntil(() =>
    checkOutPage.clickPlaceOrderButton().scrollIntoView()
  ); 
  cy.waitUntil(() =>
    checkOutPage.clickPlaceOrderButton().should("be.visible").click()
  );
})