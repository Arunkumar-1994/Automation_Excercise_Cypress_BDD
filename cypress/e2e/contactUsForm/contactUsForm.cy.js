import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pageObjects/homePage";
import ContactUsFormPage from "../../support/pageObjects/contactUsFormPage";
import { faker } from "@faker-js/faker";

const homePage = new HomePage();
const contactUsFormPage = new ContactUsFormPage();

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

And("click on contact us option",()=>{
    cy.waitUntil(()=>homePage.clickContactUsButton().should('be.visible').click());
})

And("user should veiw the contact us page with respective details and enter details",()=>{
    cy.url().should('include','/contact_us');
    const testFile = data.PdfFileUpload;
    cy.waitUntil(()=>contactUsFormPage.getContactUsHeadingText().should('be.visible').should('have.text','Contact Us'));
    cy.waitUntil(()=>contactUsFormPage.getGetInTouchHeading().should('be.visible').should('have.text','Get In Touch'));
    cy.waitUntil(()=>contactUsFormPage.getFeedbackContentAddressDetails().should('be.visible'));
    cy.waitUntil(()=>contactUsFormPage.getFeedbackEmailAddress().should('be.visible').should('have.text','feedback@automationexercise.com'));
    // cy.waitUntil(()=>contactUsFormPage.clickUploadFileButton().click().selectFile('fixtures/TokenPass.pdf'));
   const users = Array.from({ length: 1 }, () => ({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    emailSubject: faker.lorem.sentence(2),
    emailMessage: faker.lorem.paragraphs(3)
    
  }));
  users.forEach((user) => {
    cy.waitUntil(()=>contactUsFormPage.enterEmail().should('be.enabled').type(user.email));
    cy.waitUntil(()=>contactUsFormPage.enterName().should('be.enabled').type(user.username));
    cy.waitUntil(()=>contactUsFormPage.enterSubject().should('be.visible').type(user.emailSubject));
    cy.waitUntil(()=>contactUsFormPage.enterMessage().should('be.visible').type(user.emailMessage));
  })
  
 cy.get('input[type="file"]').selectFile({contents: Cypress.Buffer.from('file contents'),
        fileName:testFile,
        mimeType:'application/pdf'})
  
        cy.on('window:confirm', (text) => {
  expect(text).to.contains('Press OK to proceed!');
  return true;
});
})

When("click on submit button",()=>{
cy.waitUntil(()=>contactUsFormPage.clickSubmitButton().click())
})
Then("user should view the succes message and home button.",()=>{
    cy.waitUntil(()=>contactUsFormPage.getAlertSuccessMessage().should('be.visible').should('have.text','Success! Your details have been submitted successfully.'));
    cy.waitUntil(()=>contactUsFormPage.clickSuccessHomeButton().should('be.visible').click());
})