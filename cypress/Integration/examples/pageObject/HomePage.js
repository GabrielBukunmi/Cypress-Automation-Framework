class HomePage
{

getTextBox() 
{
  return cy.get('[name="name"]:nth-child(2)');
}
getSelect()
{
return cy.get('select');
}

getTwoWayDataBinding()
{
return cy.get('[name="name"]:nth-child(1)');
}

submit(){
   return cy.get('.btn')
}
getShop()
{
return cy.get('a[href*="shop"]');
}
checkOut(){
   return cy.contains('Checkout')
}

getCountry(){
   return cy.get('#country')
}
 getSuggestion(){
   return cy.get('.suggestions > ul > li > a')
 }
}
export default HomePage;
