import{ loginPage } from '../page_objects/loginPage';

describe('login POM', () => {

    it('login with valid data', () => {
        cy.visit('/login')
       /* loginPage.emailInput.type('alexalexjason70@gmail.com')
        loginPage.passwordInput.type('mareljapk23')
        loginPage.submitBtn.click(); */
        loginPage.login('alexalexjason70@gmail.com','mareljapk23');
    })
})