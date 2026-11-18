import LoginPage from "../pages/LoginPage";
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// fonction personnaliser pour faire le parcourt login 

Cypress.Commands.add('connexion',(username,password)=>{

    cy.get('#user-name').type(username);

    cy.get('#password').type(password);

    cy.get('#login-button').click();
})
Cypress.Commands.add('teardown',()=>{

    cy.clearAllCookies()
    cy.getAllLocalStorage()
    sessionStorage.clear()
})
Cypress.Commands.add('connexion_pom',(username,password)=>{

    LoginPage.loginApp(username,password)

})