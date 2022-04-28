/// < reference types="Cypress" />

describe('login test', () => {
    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/');
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
    })

    it('click on login button', () => {
        cy.get('a[href="/login"]').click();
    })

    it('login attempt with invalid credentials - no email', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');
        cy.get('#password').type('mareljapk23');
        cy.get('button[type="submit"]').click();
    })

    it('login attempt with invalid credentials - no @ character in email value', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');
        cy.get('#email').type('alexalexjason70gmail.com');
        cy.get('#password').type('mareljapk23');
        cy.get('button[type="submit"]').click();
    })

    it('login attempt with invalid credentials - no . character in email value', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');
        cy.get('#email').type('alexalexjason@70gmailcom');
        cy.get('#password').type('mareljapk23');
        cy.get('button[type="submit"]').click();
    })

    it('wrong email, correct password combination', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');
        cy.get('#email').type('alexjason@70gmailcom');
        cy.get('#password').type('mareljapk23');
        cy.get('button[type="submit"]').click();
    })

    it('wrong password, correct email combination', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');
        cy.get('#email').type('alexalexjason@70gmailcom');
        cy.get('#password').type('mareljapk22');
        cy.get('button[type="submit"]').click();
    })

    it('login attempt with invalid credentials - no password', () => {
        cy.visit('/login');
        cy.url().should('include', '/login');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('button[type="submit"]').click();
    })

    it('login with valid credentials', () => {
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