///<reference types="cypress"/>

describe("Login Env sauce demo",()=>{

    beforeEach(()=>{
        // Aller vers url
        cy.visit("/") // ou faire cy.visit(Cypress.config('baseUrl'))
    })

    afterEach("teardown",function(){

        cy.clearAllCookies()
        cy.getAllLocalStorage()
    })

    it('Login valide',{tags:"@smoke"}, () => {
        
        // Saisir user name
        cy.get('#user-name').type("standard_user");
        // Saisir password
        cy.get('#password').type("secret_sauce");
        // Click Login
        cy.get('#login-button').click();
        //redirection
        cy.url().should("include","/inventory.html")
        
    });

})
