/// < reference types="Cypress"/>
describe('test register',() => {

    it('register without first name', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexeealexjason70@gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it('register without last name', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#email').type('alexeealexjason70@gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('register without password', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexeealexjason70@gmail.com');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('register with valid data', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexeealexjason70@gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
})