class AllGalleries {
    get searchBox(){
        return cy.get('.form-control');
    }
    get filterBtn(){
        return cy.get('.btn btn-outline-secondary input-button');
    }

    galleries(search){
        this.searchBox.type(search);
        this.filterBtn.click();
    }
}
export const allgalleries = new AllGalleries;