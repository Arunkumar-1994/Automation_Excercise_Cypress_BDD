import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";
import ProductsPage from "../../support/pageObjects/productsPage";

const homePage = new HomePage();
const productsPage = new ProductsPage();
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

And("user can view the category list", () => {
  cy.waitUntil(() =>
    homePage.clickCategory_BrandsButton().each(($el) => {
      cy.wrap($el).should("be.visible");
    })
  );

  cy.waitUntil(() => homePage.getTestCaseButton().scrollIntoView());
  cy.waitUntil(() =>
    homePage.clickWomen_Men_Kids_CategoryOption().eq(0).click()
  );
  cy.waitUntil(() =>
    homePage.clickWomenCategoryProducts().should("have.length", "3")
  );
  cy.wait(2000);
  cy.waitUntil(() =>
    homePage.clickWomen_Men_Kids_CategoryOption().eq(0).click()
  );
  cy.wait(2000);
  cy.waitUntil(() =>
    homePage.clickWomen_Men_Kids_CategoryOption().eq(1).click()
  );
  cy.waitUntil(() =>
    homePage.clickMenCategoryProducts().should("have.length", "2")
  );
  cy.wait(2000);
  cy.waitUntil(() =>
    homePage.clickWomen_Men_Kids_CategoryOption().eq(1).click({ force: true })
  );
  cy.wait(2000);
  cy.waitUntil(() =>
    homePage.clickWomen_Men_Kids_CategoryOption().eq(2).click()
  );
  cy.waitUntil(() =>
    homePage.clickKidsCategoryProducts().should("have.length", "2")
  );
  cy.waitUntil(() =>
    homePage.clickWomen_Men_Kids_CategoryOption().eq(2).click()
  );
});

When("click on women category and click tops option", () => {
  cy.waitUntil(() =>
    homePage.clickWomen_Men_Kids_CategoryOption().eq(0).click()
  );
  cy.waitUntil(() =>
    homePage.clickWomenCategoryProducts().eq(1).click({ force: true })
  );
});

Then("user should view the womentops products", () => {
  cy.url().should("include", "/category_products/");
  cy.waitUntil(() =>
    productsPage
      .getCategoryOptionHeadingForProducts()
      .should("be.visible")
      .should("have.text", "Women - Tops Products")
  );
});

When("click on men category and click jeans option", () => {
  cy.waitUntil(() =>
    homePage.clickWomen_Men_Kids_CategoryOption().eq(0).click()
  );
  cy.wait(2000);
  cy.waitUntil(() =>
    homePage.clickWomen_Men_Kids_CategoryOption().eq(1).click()
  );
  cy.waitUntil(() => homePage.clickMenCategoryProducts().eq(1).click());
});

Then("user should view the men jeans products", () => {
  cy.url().should("include", "/category_products/");
  cy.waitUntil(() =>
    productsPage
      .getCategoryOptionHeadingForProducts()
      .should("be.visible")
      .should("have.text", "Men - Jeans Products")
  );
});
