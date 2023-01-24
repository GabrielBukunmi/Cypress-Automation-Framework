/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

//the above tags is to enable cypress be able to autosuggest methods in iframe
import 'cypress-iframe'
describe('Learning Frames',function(){

    it('Frame test', function(){

        cy.visit('https:rahulshettyacademy.com/AutomationPractice')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*=["pricing-title"]').should('have.length',2)
    })
})