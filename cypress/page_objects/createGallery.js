class CreateGallery{

    get titleField(){
        return cy.get('#title');
    }
    get descriptionField() {
        return cy.get('#description');
    }
    get imageField() {
        return cy.get('.form-control');
    }
    get addImageBtn() {
        return cy.get('button[type="button"]');
    }
    get arrowUp() {
        return cy.get('.fas fa-chevron-circle-up,[0]');
    }
    get arrowDown() {
        return cy.get('.fas fa-chevron-circle-up,[1]');
    }
    get submitBtn() {
        return cy.get('button[type="submit"],[0]');
    }
    get cancelBtn() {
        return cy.get('button[type="submit"],[1]');
    }

    createGallery(title,description,image){
        this.titleField.type(title);
        this.descriptionField.type(description);
        this.imageField.type(image);
        this.addImageBtn.click();
        this.arrowUp.click();
        this.arrowDown.click();
        this.submitBtn.click();
        this.cancelBtn.click();
    }
}

export const crtGallery = new CreateGallery();