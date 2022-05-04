/// <reference types="Cypress" />

import { allgalleries } from "../page_objects/allGalleries";

describe ('allGalleriesPOM', () =>{

    it('crtGall POM', () => {
        cy.visit('https://gallery-app.vivifyideas.com');
        allgalleries.galleries('Alfa Romeo');
    })
})