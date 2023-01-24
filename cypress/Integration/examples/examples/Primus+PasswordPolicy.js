describe('Primus Plus Project',function(){

    before(function(){

        //example is the name of the json file
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })

    it('Password Policy Test', function(){
        cy.visit('https://192.168.90.157:12030/')
        cy.get('[name="username"]').type(this.data.name)
        cy.get('[name="password"]').type(this.data.password)
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.get('#passwordMsgModal > .modal-dialog > .modal-content > .modal-header').should('be.visible')
        cy.get('.modal-body > a').click()
        cy.get('#changePassForm').should('be.visible')
        cy.get('.alert-warning').should('be.visible')
        cy.get('#currentPassword').type(this.data.password)
        cy.get('#newpassword').type(this.data.newpassword)
        cy.get('#confpassword').type(this.data.newpassword)
        //cy.get('.ch-pw-btn').click()
        
    })
})