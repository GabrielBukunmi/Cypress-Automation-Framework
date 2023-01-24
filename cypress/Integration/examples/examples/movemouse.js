describe('learning webTables',()=>{

    it('webtable test',()=>
    {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#mousehover').invoke('show')
        //use force:true in the click so that hidden element is also checked and clicked
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    }
    )}


)