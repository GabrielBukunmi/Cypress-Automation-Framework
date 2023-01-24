/// <reference types="Cypress" />

import HomePage from '../pageObject/HomePage'

describe ('Cypress command creation',function(){

    before(function(){
        cy.fixture('angularPageObject').then(function(data){
            this.data=data
        })
    })



    it ('cypress command test', function(){
        //set a special timeout for only this project using the code below
        
        //so only this project will wait for 8000milliseconds
        const homePage= new HomePage();
        
        cy.visit(Cypress.env('url')+"/angularpractice/")
    
        

        //  //validate minimum length in the textbox
        
        homePage.getTextBox().type(this.data.name)
        homePage.getTextBox().should('have.attr','minlength',2)
       
        
        homePage.getSelect().select(this.data.gender).should('have.value',this.data.gender)
        //validate text in the twoway binding field
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        //submit form
        homePage.submit().click();

        //go to shop page
        homePage.getShop().click()

        //this is to iterate over the array declared in the angularPageObject.json file
        this.data.productName.forEach(product => {
            cy.selectProduct(product)

    })
    
    homePage.checkOut().click()

    //grab the amount of the selected products
    var sum=0;
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
        //iterate through this list
        const amountField=$el.text()
        var amountValue=amountField.split(" ")[1].trim()

        sum=Number(sum)+Number(amountValue)
        /**
         * we need to resolve promise here so that only the final sum is logged
         * as javascript is asynchronous which means it does not operate sequentially
         * the first sum would be logged and then the second for each iteration if promise is not
         * resolved
         */
    }).then(function(totalValue){
        cy.log(sum)
    })
    cy.get('h3 > strong').then(function(el){
       var totalSum= el.text().split(" ")[1].trim()
       cy.log(totalSum)
       //Number encapsulating a string convert the string to a number
       expect(sum).to.equal(Number(totalSum))
    })

    homePage.checkOut().click()
    homePage.getCountry().type(this.data.country)
    cy.wait(5000)
     Cypress.config('defaultCommandTimeout', 8000)
     homePage.getSuggestion().click()
        cy.get('input[type="checkbox"]').click({force:true})
        cy.get('.ng-untouched > .btn').click()
        //force true can be used when an element is covered by another element or not visible
        cy.get('.alert').then(function(alertbody){
            expect(alertbody.text()).includes('Success')
        })
})
    
})
