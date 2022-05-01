/// < reference types="Cypress"/>
import { faker } from '@faker-js/faker';

describe('test register',() => {

    let registerData = {
        firstName:'',
        lastName:'',
        randomEmail:'',
        password:''
    }

    beforeEach( () => {
        registerData.firstName = faker.name.firstName();
        registerData.lastName = faker.name.lastName();
        registerData.randomEmail = faker.internet.email();
        registerData.password = faker.internet.password();
    })

    it('registration attempt without first name', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt with just one character in first name field', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('m');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt with more than 255 characters in first name field', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque mi augue, et imperdiet dolor ultrices ut. Ut semper non elit eu accumsan. Nulla lobortis, metus ut tincidunt lobortis, mi dui fringilla quam, ac iaculis nisi felis a nisl. Donec enim arcu, accumsan id sem nec, suscipit euismod nisl. Etiam ac pulvinar metus. Proin nisi est, ornare ut eros in, tincidunt consectetur urna. Donec bibendum, purus vitae aliquet congue, lacus diam placerat augue, vel tristique arcu leo ac magna. Nam dapibus dolor orci, sit amet bibendum nisl suscipit vestibulum. Nunc mattis magna id neque mattis, et laoreet neque aliquam. Sed porta nulla nec lacus sollicitudin, a finibus metus vehicula. Maecenas imperdiet orci tortor, vitae scelerisque nisl commodo et. Donec at urna odioFusce nec nulla id ligula molestie venenatis. Nulla nec sagittis nunc. Donec congue mauris eu sapien varius pretium. Proin placerat euismod tellus id luctus. Nullam gravida, risus vel blandit laoreet, felis lacus interdum est, viverra gravida eros nibh ut purus. Nam enim orci, placerat quis libero eu, volutpat posuere nibh. Curabitur risus massa, semper ac nulla et, ullamcorper cursus massa. Mauris dignissim quam vitae efficitur pharetra. Nullam vestibulum, purus ac posuere pretium, nisi ex ornare risus, in pulvinar nisl massa in ligula. Proin convallis id odio quis rutrum. Maecenas eu elementum ante. Nulla posuere egestas augue, ut tristique dui tincidunt nec. Nullam lobortis turpis ac pellentesque elementum. Nullam in risus vitae diam tincidunt sollicitudin at vel dolor. Praesent fermentum pretium dolor nec faucibus. Quisque mollis urna vel ante varius tempus aero. Sed quis neque et.');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt without last name', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt without @ character in email value', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt without . character between gmail.com in email value', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70@gmailcom');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt without email', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt without password', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt without password confirmation', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt - wrong password value (less than 8 characters)', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password').type('marko23');
        cy.get('#password-confirmation').type('marko23');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt - wrong password value (only letters,no numbers)', () => {
        cy.visit('/register');
        cy.url().should('include','/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password').type('markomare');
        cy.get('#password-confirmation').type('markomare');
        cy.get('[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    })

    it('registration attempt without accepted terms and conditions confirmation',() => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type('alexalexjason70@gmail.com');
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('button[type="submit"]').click();
    })

    it('register with valid data', () => {
        cy.visit('/register');
        cy.url().should('include', '/register');
        cy.get('#first-name').type('Marko');
        cy.get('#last-name').type('Markoni');
        cy.get('#email').type(randomEmail);
        cy.get('#password').type('markomare23');
        cy.get('#password-confirmation').type('markomare23');
        cy.get('[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
})