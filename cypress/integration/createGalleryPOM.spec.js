/// <reference types="Cypress" />

import { crtGallery } from '../page_objects/createGallery';

describe('create gallery POM', () => {

    it('Create Gallery POM', () => {
        cy.visit('/create');
        crtGallery.createGallery('neki naslov','neki opis','https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
    })
})

