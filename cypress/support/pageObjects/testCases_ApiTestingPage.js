class testCases_apiTestingPage {
  getApiTesting_TestCasesHeadingText() {
    //Text is APIs List for practice
    //Test Cases
    return cy.get(".col-sm-9.col-sm-offset-1 h2 b");
  }
  getTestCase_ApiSentence() {
    //Below is the list of APIs for you to practice the API testing in Automation. Click on the scenario for detailed API:
    //Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:
    return cy.get(".panel-group h5 span");
  }
  getLengthofApiTestingTestCases() {
    // length 14 for api testing
    //length 26 for test cases
    return cy.get(".panel-group .panel.panel-default div h4 a u");
  }
}
export default testCases_apiTestingPage;
