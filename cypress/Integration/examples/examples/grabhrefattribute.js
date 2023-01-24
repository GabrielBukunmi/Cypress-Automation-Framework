describe ('Handling child window',function(){
    it ('child window test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
      //prop() is used to grab the attribute of an html element. e.g href
      cy.get('#opentab').then(function(attribute){
        const attributeValue = attribute.prop('href')
        cy.log(attributeValue)
      })
    })
})