


describe('learning webTables',()=>{

    it('webtable test',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{
  const rowText=$el.text()
  if(rowText.includes("Python"))
  {
    //if the text in column 2 in any row include the word "Python",
    //get the column 2 and the particular index and apply .next() on them
    cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
    {
       const priceText= price.text()
       expect(priceText).to.equal('25')
    })
  }
        })
    })
})