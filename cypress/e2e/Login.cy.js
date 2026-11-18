///<reference types="cypress"/>

describe("Login sauce demo",()=>{

    beforeEach("set-up",()=>{
        // Aller vers url
        cy.visit('https://www.saucedemo.com/')
        }
    )
    afterEach("teardown",function(){
        if(this.currentTest.state==="failed"){
            cy.screenshot(`failure-${this.currentTest.title}`)
        }
        cy.teardown()
        
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
     it('Login valide with custom commands',{tags:"@custom_commands"}, () => {
        // cy.connexion("standard_user","secret_sauce")
        cy.connexion_pom("standard_user","secret_sauce")
        //redirection
        cy.url().should("include","/inventory.html")
        
    });
    
    it('Login invalide',{tags:["@smoke","@tnr"]}, () => {

        cy.get('#user-name').type("standard_user_hani");

        cy.get('#password').type("standard_user_hani");

        cy.get('#login-button').click();

        //cy.getByRole("alert").should('contain',"Epic sadface")
        cy.get("[data-test='error']").should("be.visible").and("contain","Epic sadface")

    });


    
})