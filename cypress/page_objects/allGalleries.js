class AllGalleries {

    get loadMoreBtn() {
        return cy.get(':nth-child(3) > :nth-child(2) > .btn');
    }
    get searchBox(){
        return cy.get('.form-control');
    }
    get filterBtn(){
        return cy.get('.input-group-append > .btn');
    }
    get gallery() {
        return cy.get(':nth-child(1) > h2 > .box-title');
    }
    galleries(search){
        this.loadMoreBtn.click();
        this.searchBox.type(search);
        this.filterBtn.click();
        this.gallery.click();
    }
}
export const allgalleries = new AllGalleries;