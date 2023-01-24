

describe ('learning pop up',()=>{
    it ('pop up test', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //cypress automatically accepts window alert
        //use window:alert to modify the behaviour of alert
        cy.on('window.alert',(str)=>
        {
            //Mocha assertion for comparing two strings
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }
        )

        cy.on('window.confirm',(str)=>
        {
            //Mocha assertion for comparing two strings
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }
        )
    })
})