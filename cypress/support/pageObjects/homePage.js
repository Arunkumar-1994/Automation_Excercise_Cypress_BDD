class homePage{

    getLogoVisible(){
        return cy.get('.logo.pull-left');
    }

    getActiveHeadding(){
        return cy.xpath("//div[@class='item active'] //div //h1")
    }
    
    getActiveSentence(){
        //the text is  = Full-Fledged practice website for Automation Engineers
        return cy.xpath("(//div[@class='item active'] //div //h2)[1]")
    }

    getActivePara(){
        /**
         * The active paragraph is = All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
         */
    return cy.xpath("(//div[@class='item active'] //div //p)[1]");
    }

    getTestCaseButton(){
        return cy.xpath("//div[@class='item active'] //div //a[@class='test_cases_list'] //button")

        /** 
         * Text is = Test Cases and check is enabled
        */
    }

    getAPIlistForPracticeButton(){
        return cy.xpath("//div[@class='item active'] //div //a[@class='apis_list'] //button")
        /** 
        * Text is = APIs list for practice and check is enabled
        */
    }


    clickLeftControlButton(){
        return cy.get("a.left.control-carousel.hidden-xs");
    }

    clickRightControlButton(){
        return cy.get("a.right.control-carousel.hidden-xs");
    }

    clickHomeButton(){
        return cy.xpath("//li //a[text()=' Home']");
    }
    
     clickProductsButton(){
        return cy.xpath("//li //a[text()=' Products']");
    }

    clickCartButton(){
        return cy.xpath("//li //a[text()=' Cart']");
    }
    clickLoginButton(){
        return cy.xpath("//li //a[text()=' Signup / Login']");
    }

    clickTestCasesButton(){
        return cy.xpath("//li //a[text()=' Test Cases']");
    }

    clickApiTestngButton(){
        return cy.xpath("//li //a[text()=' API Testing']");
    }

    clickHomeButton(){
        return cy.xpath("//li //a[text()=' Home']");
    }

    clickVideoTutorialsButton(){
        return cy.xpath("//li //a[text()=' Video Tutorials']");
    }

    clickContactUsButton(){
        return cy.xpath("//li //a[text()=' Contact us']");
    }

    clickLogoutButton(){
        return cy.xpath("//li //a[text()=' Logout']");
    }

    clickDeleteAccountButton(){
        return cy.xpath("//li //a[text()=' Delete Account']");
    }

    getLoggedInAsButton(){
        return cy.xpath("//li //a[text()=' Logged in as ']");
    }
}
export default homePage;