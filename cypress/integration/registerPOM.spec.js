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
        
        registerPage.register(
            registerData.firstName,
            registerData.lastName,
            registerData.email,
            registerData.password
        )
    })
})