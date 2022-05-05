/// <reference types="Cypress" />

import { allgalleries } from "../page_objects/allGalleries";

describe ('allGalleries test', () =>{

    beforeEach('visit all galleries page', () => {
        cy.visit('/');
    })

    it('validate page', () => {
        cy.visit('/');
        allgalleries.allGalleryHeading
            .should('be.visible')
            .and('have.text', 'All Galleries');
    })

    it('all galleries displaying correctly', () => {
        allgalleries.gallery
        .should('be.visible')
        .and('have.length', 10);
    })

    it('10 more galleries loading', () => {
        allgalleries.gallery.should('have.length',10);
        allgalleries.loadMoreBtn.click();
        allgalleries.gallery.should('have.length', 20);
        allgalleries.loadMoreBtn.click();
        allgalleries.gallery.should('have.length', 30);
        allgalleries.loadMoreBtn.click();
        allgalleries.gallery.should('have.length', 40);
    })

    it('redirect to single gallery page',() =>{
        allgalleries.gallery
        .first()
        .find('a')
        .first()
        .click();
        cy.url().should('include','/galleries')
    })

    it('redirect to authors\' gallery page',() =>{
        allgalleries.gallery
        .first()
        .find('a')
        .last()
        .click();
        cy.url().should('include','/authors')
    })

    it('search returning correct results', () => {n
        allgalleries.gallery.should('have.length', 10)
        allgalleries.search('Product Security Architect');
        allgalleries.gallery.should('have.length', 1);
        allgalleries.gallery
            .find('a')
            .first()
            .should('have.text', 'Product Security Architect');
    })
})