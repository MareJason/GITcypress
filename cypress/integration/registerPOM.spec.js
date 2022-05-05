import{ faker } from '@faker-js/faker';
import {registerPage} from '../page_objects/registerPage';

describe('register POM', () => {

    let registerData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(20, true, /[A-Z]/, '888')
    }

    before('visit register page', () => {
        cy.visit('/register');
        cy.url().should('include','/register')
    })

    it('register with valid data', () => {
        cy.visit('/register')
        cy.url().should('contains','/register');
        registerPage.registerHeading.should('have.text', 'Register');
        registerPage.firstName.type('Marko');
        registerPage.lastName.type('Markovici');
        registerPage.email.type('alex@gmailcom');
        registerPage.pass.type('maremare23');
        registerPage.passConfirmation.type('maremare23');
        registerPage.termsAndConditions.click();
        registerPage.submitBtn.click();
        registerPage.errMsg.should('have.text', 'The email must be a valid email address.')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and('have.css', 'color', 'rgb(114, 28, 36)')
    })
    })
/*registerPage.register(
    registerData.firstName,
    registerData.lastName,
    registerData.email,
    registerData.password*/