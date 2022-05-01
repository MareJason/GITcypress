/// <reference types="Cypress" />
const locators = require('../fixtures/locators.json');

describe('Login with locators', () =>{

    before('visit login page', () => {
        cy.visit('/login');
    })

    it('login with valid data', () => {
        cy.get(locators.Login.emailInput).type('alexalexjason70@gmail.com');
        cy.get(locators.Login.passInput).type('mareljapk23');
        cy.get(locators.Login.submitBtn).click();
        cy.url().should('not.include', 'login');
    })

})