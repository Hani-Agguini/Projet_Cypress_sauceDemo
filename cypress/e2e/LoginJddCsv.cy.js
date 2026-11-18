import csv from "csvtojson"

///<reference types="cypress"/>

describe("login widh jdd csv",()=>{

    it("login with jdd fixtures",{tags:"@csv"}, () =>{
      
        cy.readFile("cypress/fixtures/jdd.csv").then((csvData)=>{

            csv().fromString(csvData).then((users)=>{
                users.forEach((user) => {
                    cy.visit("https://www.saucedemo.com/")
                    // Saisir user name
                    cy.get('#user-name').type(user.username);
                    // Saisir password
                    cy.get('#password').type(user.password);
                    // Click Login
                    cy.get('#login-button').click();

                    switch (user.result){
                        case "success":
                            cy.url().should("include","/inventory.html")
                            break;
                        default :
                            cy.get("[data-test='error']").should("be.visible").and("contain","Epic sadface")
                    }
                });
            })
        })
    })
})