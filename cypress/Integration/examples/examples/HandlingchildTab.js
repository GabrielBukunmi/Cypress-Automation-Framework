describe ('Handling child window',function(){
    it ('child window test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
       //cypress does not provide a particular method to handle child window
       //The work around is to remove target so that the href can open in the page
       cy.get('#opentab').invoke('removeAttr','target').click()  
       

       //verify that the new url is contained in the url opened
       cy.url().should('include','rahulshettyacademy')
       //use go command to move back and forth on the browser pages
       cy.go('back')
    })
})