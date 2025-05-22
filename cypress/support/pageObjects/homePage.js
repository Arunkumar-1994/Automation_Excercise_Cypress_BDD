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

    getSubscriptionHeading(){
        return cy.get('.single-widget h2');
    }

    enterEmailAddress(){
        return cy.get('#susbscribe_email');
    }

    clickSubscribeButton(){
        return cy.get('#subscribe');
    }

    getSubscriptionSuccessMessage(){
        return cy.get('.alert-success.alert');
    }

    clickAddToCartOfFirstProduct(){
        return cy.get('.btn.btn-default.add-to-cart ').eq(0);
    }

    getConfirmDialogBox(){
        return cy.get('div.modal-dialog.modal-confirm div.modal-content');
    }

    getConfirmDialogBoxHeading(){
        return cy.get('.modal-content div h4').should('be.visible')
        // .should('have.text','Added!');
        // .should('have.text','Checkout');
    }

    getConfirmDialogSentence(){
        return cy.get('.modal-content div p').eq(0).should('be.visible')
        // .should('have.text','Your product has been added to cart.');
        // .should('have.text','Register / Login account to proceed on checkout.');
    }

    clickViewCart_RegisterLoginButton(){
        // return cy.get('.modal-content div p a').should('be.visible');
        return cy.get('.modal-content div p a')
    }

    clickContinue_ContinueOnChartButton(){
        return cy.get('.modal-content .modal-footer button');
    }

    clickCategory_BrandsButton(){
        //eq(0) for category eq(1) brands
        return cy.get('.left-sidebar h2');
    }

    clickWomen_Men_Kids_CategoryOption(){
        //eq(0) for Women,, eq(1) for men.., eq(2) for kids
        return cy.get('.panel-group.category-products div h4.panel-title a');
    }

    clickWomenCategoryProducts(){
        //eq(0) for dress // eq(1) for tops //eq(2) for saree
        return cy.get('div#Women .panel-body ul li a')
    }
    
    clickMenCategoryProducts(){
        //eq(0) Tshirts  //eq(1) Jeans
        return cy.get('div#Men .panel-body ul li a')
    }

    clickKidsCategoryProducts(){
        //eq(0) Dress //eq(1) Tops and shirts
        return cy.get('div#Kids .panel-body ul li a');
    }
   
    getNoOfBrandList(){
        //length is 8
        return cy.get('.brands-name .nav.nav-pills.nav-stacked li a');
    }
    clickBrandName(brandName){
        // 1. Polo 2. H&M 3.Madame 4. Mast & Harbour 5. Babyhug 6. Allen Solly Junior 7. Kookie Kids 8. Biba 
        return cy.get(`.brands-name .nav.nav-pills.nav-stacked li a[href="/brand_products/${brandName}"]`);
    }
    
}
export default homePage;