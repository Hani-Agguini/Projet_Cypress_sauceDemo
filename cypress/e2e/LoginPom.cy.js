import LoginPage from "../pages/LoginPage.js"

///<reference types="cypress"/>


describe("Login sauce demo Pom",()=>{

    beforeEach(()=>{
        // Aller vers url
        cy.visit("https://www.saucedemo.com/")
    })
    
    it('Login valide', () => {

        // Saisir user name
        LoginPage.saisirUsername("standard_user")
        // Saisir password
        LoginPage.saisirPassword("secret_sauce")
        // Click Login
        LoginPage.clickLogin()
        //redirection
        cy.url().should("include","/inventory.html")
        
    });
    it('Login invalide', () => {

        // Saisir user name
        LoginPage.saisirUsername("standard_hani")
        // Saisir password
        LoginPage.saisirPassword("secret_sauce")
        // Click Login
        LoginPage.clickLogin()
        //redirection
        LoginPage.getmsgerror().should("be.visible").and("contain","Epic sadface")
        
    });

})

