describe('Swiftpay Project', function(){

    //before each is used to perform some actions before every test runs
this.beforeEach(function(){
    cy.visit('http://10.1.7.227:5070/')
})

    it('Register test', function(){
        
        cy.contains('REGISTER YOUR STORE').click()
        //submit empty form
        cy.get('.btn').click()
        cy.get('.text-danger').then(function(alertMessage){
            expect(alertMessage.text()).includes('special character,a number')
        })

        cy.get('[placeholder="Account Number"]').type('0000008855')
        cy.get('[name="storeName"]').type('Cypress Test')
        cy.get('[name="businessType"]').type('Technology')
        cy.get('[name="userName"]').type('Cypressser')
        cy.get('[name="password"]').type('cypressuser')
        cy.wait(2000)
        
        cy.get('[name="password"]').clear().type('Cypress@123')
        cy.get('.btn').click()
        cy.go('back')
    })

    it('Login and Add Product Test',function(){
        cy.get('[href="/login"] > .btn').click()
       
        
        cy.get('.bg-gray').type('adex001')
        cy.get(':nth-child(3) > .form-input > input').type('P@ssword@123')
        cy.get('.btn').click()
        //verify that url now contains dashboard
        cy.url().should('include','dashboard')
        cy.get('.sc-dIvrsQ > .navbar-links > .navbar-text').should('be.visible')
        cy.get('.color-change-5x > :nth-child(2)').click()
        cy.wait(5000)

        //ADD PRODUCT
        cy.get('.sc-fKgJPI > [href="/dashboard/products"] > .navbar-text').click()
        cy.get('.sc-bXmHAB').click({force:true})
        const image='cypress/fixtures/myPicture.jpeg'
        //upload image
        cy.get('[type="file"]').selectFile('cypress/fixtures/myPicture.jpeg',{force:true})
        cy.get('#name').type('NewProduct',{force:true})
        cy.get('#description').type('Learn Cypress Automation - Masterclass')
        cy.get('select').select('NGN')
        cy.get('#price').type('1700000')
        cy.get('#qty').type('1')
        cy.get('.sc-iQQLPo').click()
        cy.wait(7000)

        //verify that the product is created
        cy.get('.sc-eirqVv.dSzotL h5:nth-child(2)').each(($el,index,$list)=>{
           if($el.text().includes('NewProduct')){
            cy.log($el.text())
           }
        })
    })
})