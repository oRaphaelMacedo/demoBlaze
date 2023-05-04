/// <reference types="Cypress" />

describe('Make a purchase on the Demoblaze website', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('SiteProd'))
    cy.login()
  })

  it('Search, add products in the cart and Order successfuly', () =>{
    cy.addItens()
    cy.order()
  })
  it('Search, add products in the cart and Order successfuly', () =>{
    cy.addItens()
    cy.order()
  })
  it('Search, add products in the cart and Order successfuly', () =>{
    cy.addItens()
    cy.order()
  })
  

})

