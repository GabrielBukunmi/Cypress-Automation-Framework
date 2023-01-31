describe('PRIMUS PLUS',function(){

    //use a hook like before function
    before(function(){
        cy.fixture('primusplusdata').then(function(data){
            this.data=data;
        })
    })
// Login before each test
    this.beforeEach(function(){

        })

    it('Login', function(){
        cy.visit('https://192.168.90.157:12012')
        cy.get('[name="username"]').type(this.data.name)
        cy.get('[name="password"]').type(this.data.password)
        cy.get('button[type="submit"]').click()
        cy.wait(5000)
        cy.get('.navbar-brand > img').should('be.visible')

    })

    it('Payment Module', function(){

    })
})

