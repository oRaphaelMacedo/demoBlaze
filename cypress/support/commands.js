import locators from "../support/locators";

Cypress.Commands.add('login', (
    username = Cypress.env('USER'), 
    password = Cypress.env('USER_PASSWORD')
)=>{
    cy.get(locators.LOGIN.LOGIN_BUTON).click()
    cy.contains('Log in').should('be.visible')
    cy.get(locators.LOGIN.USER_FILD).type(username, {force:true})
    cy.get(locators.LOGIN.PASSWORD_FILD).type(password, {force:true, log: false})
    cy.get(locators.LOGIN.SIGN_IN).click() 
})

Cypress.Commands.add('addItens', () =>{
    cy.get('[onclick="byCat(\'phone\')"]').click()
    cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('.active > .nav-link').click()
    cy.get('[onclick="byCat(\'monitor\')"]').click()
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('.active > .nav-link').click()
})

Cypress.Commands.add('order', () =>{
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-header').should('be.visible')
    cy.get(locators.ORDER.NAME).type('Raphael Macedo', {force:true})
    cy.get(locators.ORDER.COUNTRY).type('Portugal', {force:true})
    cy.get(locators.ORDER.CITY).type('Braga', {force:true})
    cy.get(locators.ORDER.CARD).type('4614159710779913', {force:true})
    cy.get(locators.ORDER.MONTH).type('05', {force:true})
    cy.get(locators.ORDER.YEAR).type('2025', {force:true})
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.contains('.sweet-alert > h2', 'Thank you for your purchase!').should('be.visible')
    cy.get('.confirm').click()
})