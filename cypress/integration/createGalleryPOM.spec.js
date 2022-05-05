/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage';
import { createGallery, crtGallery } from '../page_objects/createGallery';

describe('Create gallery page test', () => {

    before('visit login page', () =>{
        cy.visit('/login');
        loginPage.emailInput.type('alexalexjason70@gmail.com');
        loginPage.passwordInput.type('mareljapk23');
        loginPage.submitBtn.click();
        cy.wait(1000);
    })

   it('Create Gallery with valid data', () => {
    cy.visit('/create');
    createGallery.createGalleryHeading
    .should('be.visible')
    .and('have.text','Create Gallery');
    createGallery.titleField.type('neki naslov');
    createGallery.descriptionField.type('neki opis');
    createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
    createGallery.submitBtn.click();
   })

})

