class CreateGallery{

    get titleField(){
        return cy.get('#title');
    }
    get descriptionField() {
        return cy.get('#description');
    }
    get imageField() {
        return cy.get('.form-control').eq(2);
    }
    get arrowUp() {
        return cy.get('button').eq(0);
    }
    get arrowDown() {
        return cy.get('button').eq(1);
    }
    get addImageBtn() {
        return cy.get('button').eq(2);
    }
    get submitBtn() {
        return cy.get('.btn').first();
    }
    get cancelBtn() {
        return cy.get('.btn').last();
    }
    get createGalleryHeading() {
        return cy.get('h1');
    }

    createGalleryFunction(title,description,image){
        this.titleField.type(title);
        this.descriptionField.type(description);
        this.imageField.type(image);
        this.arrowDown.click();
        this.addImageBtn.click();
        this.submitBtn.click();
    }
}

export const createGallery = new CreateGallery();