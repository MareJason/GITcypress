import{ loginPage } from '../page_objects/loginPage';

describe('login POM', () => {

    it('login with valid data', () => {
        cy.visit('/login');
        cy.url().should('contains','/login');
        loginPage.loginHeading.should('have.text', 'Please login');
        loginPage.login('alexalexjason70@gmail.com','mareljapk23');
        loginPage.errorMsg.should('be.visible')
        .and('have.text','Bad Credentials')
        .and('have.css','background-color','rgb(248, 215, 218)');
        cy.url().should('include', '/login');
    })
})