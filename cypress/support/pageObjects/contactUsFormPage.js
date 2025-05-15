class contactUsFormPage {
  getContactUsHeadingText() {
    return cy.get(".col-sm-12 h2.title.text-center");
  }

  getGetInTouchHeading() {
    //Get In Touch
    return cy.get(".contact-form h2.title.text-center");
  }

  enterName() {
    return cy.get('.form-group.col-md-6 [data-qa="name"]');
  }

  enterEmail() {
    return cy.get('.form-group.col-md-6 [data-qa="email"]');
  }

  enterSubject() {
    return cy.get('.form-group.col-md-12 [name="subject"]');
  }

  enterMessage() {
    return cy.get(".form-group.col-md-12 #message");
  }

  clickUploadFileButton() {
    return cy.get('.form-group.col-md-12 [name="upload_file"]');
  }

  clickSubmitButton() {
    return cy.get(
      ".form-group.col-md-12 .btn.btn-primary.pull-left.submit_form"
    );
  }

  getFeedbackForUsHeadingText() {
    return cy.get(".col-sm-4 .contact-info h2");
  }

  getFeedbackContentAddressDetails() {
    return cy.get(".col-sm-4 .contact-info address");
  }

  getFeedbackEmailAddress() {
    //feedback@automationexercise.com
    return cy.get(".col-sm-4 .contact-info address p a u");
  }

  /**After click submit button, user can view the alert as Ok and cancel option */

  getAlertSuccessMessage() {
    //get text is "Success! Your details have been submitted successfully."
    return cy.get("div.status.alert.alert-success");
  }

  clickSuccessHomeButton() {
    return cy.get("div#form-section a.btn.btn-success");
  }
}
export default contactUsFormPage;
