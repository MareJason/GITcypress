/// < reference types="Cypress" />

describe('login test', () => {
    xit('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
    })

    xit('click on login button', () => {
        cy.get('a[href="/login"]').click();
    })

    it.only('login with valid credentials', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password').type('mareljapk23');
        cy.get('button[type="submit"]').click();
    })
    it('click on logout button', () => {
        cy.get("a[class='nav-link nav-buttons']").should('have.length',3);
        cy.get("a[class='nav-link nav-buttons']").eq(2).click();
    })
})