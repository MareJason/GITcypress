/// <reference types="Cypress" />

import { loginPage } from '../page_objects/loginPage';
import { createGallery } from '../page_objects/createGallery';

describe('Create gallery page test', () => {

    beforeEach('visit login page', () =>{
        cy.intercept({
            method:'POST',
            url:'https://gallery-api.vivifyideas.com/api/auth/login'
        }).as('visit login page')
        cy.visit('/login');
        loginPage.emailInput.type('alexalexjason70@gmail.com');
        loginPage.passwordInput.type('mareljapk23');
        loginPage.submitBtn.click();
        cy.get('h1').should('have.text', 'All Galleries')
        cy.visit('/create');
        cy.wait('@visit login page').then(interception => {
            expect(interception.response.statusCode).eq(200)
            expect(interception.response.statusMessage).eq('OK');
            console.log('RESPONSE', interception);
        })
    })
    it('validate Create Gallery page', () => {
        createGallery.createGalleryHeading
        .should('be.visible')
        .and('have.text','Create Gallery')
    })

    it('creating gallery without title', () => {
        createGallery.descriptionField.type('some description');
        createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
        createGallery.submitBtn.click();
        cy.url().should('include','/create')
    }) 

    it('creating gallery with only one character in title field', () => {
       cy.intercept({
        method:'POST',
        url:'https://gallery-api.vivifyideas.com/api/galleries'
       }).as('oneLetterTitle');
        createGallery.titleField.type('m');
        createGallery.descriptionField.type('some description');
        createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
        createGallery.submitBtn.click();
        createGallery.errorMsg
        .should('be.visible')
        .and('have.text','The title must be at least 2 characters.')
        .and('have.css','background-color','rgb(248, 215, 218)');
        cy.url().should('include','/create')
        cy.wait('@oneLetterTitle').then(interception =>{
            console.log('RESPONSE', interception);
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
        })
    })

    it('creating gallery with more than 255 characters in title field', () => {
        cy.intercept({
            method:'POST',
            url: 'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('more than 255');
        createGallery.titleField.type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et');
        createGallery.descriptionField.type('some description');
        createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
        createGallery.submitBtn.click();
        createGallery.errorMsg
        .should('be.visible')
        .and('have.text','The title may not be greater than 255 characters.')
        .and('have.css','background-color','rgb(248, 215, 218)');
        cy.url().should('include','/create')
        cy.wait('@more than 255').then(interception => {
            console.log('RESPONSE', interception);
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            expect(interception.response.statusMessage).eq('Unprocessable Entity');
        })
    })

    it('creating gallery with more than 1000 characters in descripion field', () => {
        cy.intercept({
            method:'POST',
            url:'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('more than 1000 char');
        createGallery.titleField.type('some title');
        createGallery.descriptionField.type('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat. Vivamus quis mi. Phasellus a est. Phasellus magna. In hac habitasse platea dictumst. Curabitur at lacus ac velit ornare lobortis. Curabitur a felis in nunc fringilla tristique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit. Morbi ac felis. Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede. Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nunc nulla. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. In auctor lobortis lacus. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna. Vestibulum ullamcorper mauris at ligula. Fusce fermentum. Nullam cursus lacinia erat. Praesent blandit laoreet nibh. Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue. Curabitur vestibulum aliquam leo. Praesent egestas neque eu enim. In hac habitasse platea dictumst. Fusce a quam. Etiam ut purus mattis mauris sodales aliquam. Curabitur nisi. Quisque malesuada placerat nisl. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Mauris sollicitudin fermentum libero. Praesent nonummy mi in odio. Nunc interdum lacus sit amet orci. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Morbi mollis tellus ac sapien. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus. Fusce vel dui. Sed in libero ut nibh placerat accumsan. Proin faucibus arcu quis ante. In consectetuer turpis ut velit. Nulla sit amet est. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. Suspendisse feugiat. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent nec nisl a purus blandit viverra. Praesent ac massa at ligula laoreet iaculis. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Fusce pharetra convallis urna. Quisque ut nisi. Donec mi odio, faucibus at, scelerisque quis, convallis');
        createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
        createGallery.submitBtn.click();
        createGallery.errorMsg
        .should('be.visible')
        .and('have.text','The description may not be greater than 1000 characters.')
        .and('have.css','background-color','rgb(248, 215, 218)')
        cy.url().should('include','/create');
        cy.wait('@more than 1000 char').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
        })
    })

    it('creating gallery without description', () => {
        cy.intercept({
            method:'POST',
            url:'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('no description');
        createGallery.titleField.type('some title');
        createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
        createGallery.submitBtn.click();
        cy.url().should('include','/');
        cy.wait('@no description').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(201);
        createGallery.descriptionField.should('be.empty');
        cy.url().should("include", "/");
        })
    })

    it('creating gallery with wrong image format', () => {
        cy.intercept({
            method:'POST',
            url:'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('wrong image format');
        createGallery.titleField.type('some text');
        createGallery.descriptionField.type('some description');
        createGallery.imageField.type('https://assets.codepen.io/3/kiwi.svg')
        createGallery.submitBtn.click();
        createGallery.errorMsg
        .should('be.visible')
        .and('have.text','Wrong format of image')
        .and('have.css','background-color','rgb(248, 215, 218)')
        .and('have.css','color','rgb(114, 28, 36)')
        cy.wait('@wrong image format').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
        cy.url().should('include','/create');
        })
    })

    it('creating gallery with invalid URL', () => {
        cy.intercept({
            method:'POST',
            url:'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('invalid url');
        createGallery.titleField.type('some text');
        createGallery.descriptionField.type('some description');
        createGallery.imageField.type('https://assets.codepen.io/3/kiwi')
        createGallery.submitBtn.click();
        createGallery.errorMsg
        .should('be.visible')
        .and('have.text','Wrong format of image')
        .and('have.css','background-color','rgb(248, 215, 218)')
        .and('have.css','color','rgb(114, 28, 36)')
        cy.wait('@invalid url').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            cy.url().should('include','/create');
        })
    })

    it('creating gallery without URL of image', () => {
        createGallery.titleField.type('some text');
        createGallery.descriptionField.type('some description');
        createGallery.submitBtn.click();
        cy.url().should('include','/create');
    })

    it('creating gallery with two images at the same time', () => {
        cy.intercept({
            method:'POST',
            url:'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('creating two images');
        createGallery.titleField.type('some text');
        createGallery.descriptionField.type('some desription');
        createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
        createGallery.addImageBtn.click();
        createGallery.image2Field.type('https://s3.eu-central-1.amazonaws.com/stern-nl/01/giulia-leasen-1.jpg');
        createGallery.submitBtn.click();
        cy.url().should("not.include", "/create");
        cy.wait('@creating two images').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.statusMessage).eq('Created');
            expect(interception.response.body.user_id).eq(165);
            expect(interception.response.body.description).eq('some desription');
            expect(interception.response.body.title).eq('some text');
        })
    })

    it('deleting first image', () => {
        cy.intercept({
            method:'POST',
            url:'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('delete image');
        createGallery.titleField.type('some text');
        createGallery.descriptionField.type('some description');
        createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
        createGallery.addImageBtn.click();
        createGallery.image2Field.type('https://s3.eu-central-1.amazonaws.com/stern-nl/01/giulia-leasen-1.jpg');
        createGallery.deleteImage.first().find('button').first().click();
        cy.get('.input').should('have.length', 0);
        createGallery.submitBtn.click();
        cy.url().should("not.include", "/create");
        cy.wait('@delete image').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.statusMessage).eq('Created');
            expect(interception.response.method).eq(null);
            expect(interception.response.body.user_id).eq(165);
        })
    })

    it('move first image down',() =>{
        cy.intercept({
            method:'POST',
            url:'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('move image down');
        createGallery.titleField.type('some text');
        createGallery.descriptionField.type('some description');
        createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
        createGallery.addImageBtn.click();
        createGallery.image2Field.type('https://s3.eu-central-1.amazonaws.com/stern-nl/01/giulia-leasen-1.jpg');
        createGallery.arrowDown.find('button').eq(2).click();
        createGallery.submitBtn.click();
        cy.url().should("include", "/")
        cy.wait('@move image down').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.statusMessage).eq('Created');
            expect(interception.response.method).eq(null);
            expect(interception.response.body.user_id).eq(165);
            expect(interception.response.body.title).eq('some text');
        })
     })

    it('move second image up',() =>{
        cy.intercept({
            method:'POST',
            url:'https://gallery-api.vivifyideas.com/api/galleries'
        }).as('move image up');
        createGallery.titleField.type('some text');
        createGallery.descriptionField.type('some description');
        createGallery.imageField.type('https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
        createGallery.addImageBtn.click();
        createGallery.image2Field.type('https://s3.eu-central-1.amazonaws.com/stern-nl/01/giulia-leasen-1.jpg');
        createGallery.arrowUp.find('button').eq(1).click();
        createGallery.submitBtn.click();
        cy.url().should("not.include", "/create")
        cy.wait('@move image up').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.statusMessage).eq('Created');
            expect(interception.response.method).eq(null);
            expect(interception.response.body.user_id).eq(165);
            expect(interception.response.body.title).eq('some text');
            expect(interception.response.body.description).eq('some description');
        })
     })

     it.only('check if cancel button works',() =>{
         cy.intercept({
             method:'POST',
             url:'https://gallery-api.vivifyideas.com/api/galleries'
         }).as('cancel button');
        createGallery.titleField.type('some text');
        createGallery.descriptionField.type('some description');
        createGallery.imageField.type('https://s3.eu-central-1.amazonaws.com/stern-nl/01/giulia-leasen-1.jpg');
        createGallery.cancelBtn.click();
        cy.url().should("include", "/");
        cy.wait('@cancel button').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.statusMessage).eq('Created');
            expect(interception.response.method).eq(null);
            expect(interception.response.body.user_id).eq(165);
        })
     })

   it('Create Gallery with valid data', () => {
        createGallery.createGallery('Alfa Romeo Giulia','Fast and elegant at the same time','https://m.faz.net/media1/ppmedia/aktuell/491758916/1.7389103/mmobject-still_full/eine-nummer-schneller.jpg');
   })

})

