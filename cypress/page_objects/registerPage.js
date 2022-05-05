class RegisterPage{

    get firstName() {
        return cy.get('#first-name');    
    }

    get lastName() {
        return cy.get('#last-name');    
    }

    get email() {
        return cy.get('#email');
     }

     get pass() {
        return cy.get('#password');
     }

     get passConfirmation() {
        return cy.get('#password-confirmation');
     }

     get termsAndConditions() {
        return cy.get("[type='checkbox']");
     }
 
     get submitBtn() {
        return cy.get('button[type="submit"]');
     }

     get registerHeading() {
        return cy.get('h1');
     }
     get errMsg() {
        return cy.get('p[class="alert alert-danger"]');
     }

     register(firstName, lastName, email, pass) {
         this.firstName.type(firstName);
         this.lastName.type(lastName);
         this.email.type(email);
         this.pass.type(pass);
         this.passConfirmation.type(pass);
         this.termsAndConditions.click();
         this.submitBtn.click();
     }
 
}

export const registerPage = new RegisterPage();