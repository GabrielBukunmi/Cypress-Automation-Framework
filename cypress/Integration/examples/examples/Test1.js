

//Cypress - SPEC
describe('My first test suite',function()
{
    it('My first test case',function()
    {
//test steps should go here
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(5000)
cy.get('.products').as('productLocator')
cy.get('@productLocator').find('.product').should('have.length',4);
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    //grab the product name
    const vegText = $el.find('h4.product-name').text();
    if (vegText.includes('Cashews')) 
    {
      // wrap this element so we can
      // use cypress commands on it
      console.log('I am reaching here')
      cy.wrap($el).find('button').click();
    }
    })
    //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')
    //this is to print in logs
   cy.get('.brand').then(function (logoelement) 
   {
    cy.log(logoelement.text())
    
   })

   cy.get('.cart-icon > img').click()
   cy.get('.cart-icon > img')
    

   
}

    )})