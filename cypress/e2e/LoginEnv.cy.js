///<reference types="cypress"/>

describe("Login Env sauce demo",()=>{

    beforeEach(()=>{
        let env = Cypress.expose("var")
        let url
        switch(env){
            case "Dev":
                url = "ca marche pas" 
                break
            case "Recette":
                url = "https://www.saucedemo.com/"
                break
            case "Preprod":
                url = "ca marche pas"
                break
            default :
                url = "https://www.saucedemo.com/"
        }
        // Aller vers url
        cy.visit(url)
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
