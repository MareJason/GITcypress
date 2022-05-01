/// <reference types="Cypress" />

import { faker } from '@faker-js/faker';

const locators = require('../fixtures/locators.json');

describe('Register with locators', () =>{

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

    before('visit register page', () => {
        cy.visit('/register');
    })

    it('register with valid data', () => {
        cy.get(locators.registration.firstName).type(registerData.firstName);
        cy.get(locators.registration.lastName).type(registerData.lastName);
        cy.get(locators.registration.email).type(registerData.randomEmail);
        cy.get(locators.registration.pass).type(registerData.password);
        cy.get(locators.registration.passConfirmation).type(registerData.password);
        cy.get(locators.registration.termsAndConditions).click();
        cy.get(locators.registration.submitBtn).click();
        cy.url().should('not.include', '/register');
    })

})