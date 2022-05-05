class AllGalleries {

    get allGalleryHeading() {
        return cy.get('h1');
    }
    get loadMoreBtn() {
        return cy.get(':nth-child(3) > :nth-child(2) > .btn');
    }
    get searchBox(){
        return cy.get('input');
    }
    get filterBtn(){
        return cy.get('.btn').first();
    }
    get gallery() {
        return cy.get('.cell');
    }

    search(searchTerm) {
        this.searchBox.type(searchTerm);
        this.filterBtn.click();
    } 



   /* galleries(search){
        this.loadMoreBtn.click();
        this.searchBox.type(search);
        this.filterBtn.click();
        this.gallery.click();
    }*/
}
export const allgalleries = new AllGalleries;