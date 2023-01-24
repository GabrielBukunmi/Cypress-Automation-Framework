describe('Learning Checkboxes',function(){

    it('automation of checkboxes',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])



        //Static Dropdown
        cy.get('select').select('Option2').should('have.value','option2')

        //Dynamic Dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($el, index, $list)=>{
            if($el.text()=="India"){
                cy.wrap($el).click()
            }
        })
        //test on visibility

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        cy.get("#hide-textbox").click()
        cy.get('#displayed-text').should('not.be.visible')


        //radio button
        cy.get('[value="radio1"]').check().should('have.value','radio1')
    })
})