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
    get image2Field() {
        return cy.get('input').last();
    }
    get arrowUp() {
        return cy.get('.input-group-append').last();
    }
    get arrowDown() {
        return cy.get('.input-group-append').first();
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
    get errorMsg() {
        return cy.get('p[class="alert alert-danger"]');
    }
     get deleteImage() {
        return cy.get('.input-group-append');     
    }

    createGallery(title,description,image){
        this.titleField.type(title);
        this.descriptionField.type(description);
        this.imageField.type(image);
        this.submitBtn.click();
    }
}

export const createGallery = new CreateGallery();