describe('Swiftpay Project', function(){
    it('Register test', function(){
        cy.visit('http://10.1.7.227:5070/')
        cy.contains('REGISTER YOUR STORE').click()
        cy.get('[placeholder="Account Number]').type('1228968490')
        cy.get('[name="storeName"]').type('Cypress Test')
        cy.get('[name="businessType"]').type('Technology')
        cy.get('[name="userName"]').type('CypressUser')
        cy.get('[name="password"]').type('CypressUser')
        cy.get('.text-danger').then(function(alertMessage){
            expect(alertMessage.text()).includes('special character,a number')
        })
        cy.get('[name="password"]').clear().type('Cypress@123')
        cy.get('.btn').click()
    })
})