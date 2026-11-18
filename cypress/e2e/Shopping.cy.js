import LoginPage from "../pages/LoginPage.js"
import InventoryPage from "../pages/InventoryPage.js"
import CartPage from "../pages/CartPage.js"

///<reference types="cypress"/>

describe("E2E shopping",()=>{

    beforeEach(()=>{

        // Aller vers url
        cy.visit("https://www.saucedemo.com/")
        // // Saisir user name
        // LoginPage.saisirUsername("standard_user")
        // // Saisir password
        // LoginPage.saisirPassword("secret_sauce")
        // // Click Login
        // LoginPage.clickLogin()
        LoginPage.loginApp("standard_user","secret_sauce")

        
    })
    
    it('add products ....', () => {

        //redirection
        cy.url().should("include","/inventory.html")

        // ajout de back pack
        InventoryPage.clickAddBackpack()
        // vérification visibilité du button remove 
        InventoryPage.verifremoveBackpack().should("be.visible")
        // vérification numéro affiché dans le cart 
        InventoryPage.getNbpanier().should("have.text","1")
        InventoryPage.clickClickpanier()
        cy.url().should("include","/cart.html")

        CartPage.getCartList().should("contain","Sauce Labs Backpack")
        CartPage.clickContunieShopping()

        cy.url().should("include","/inventory.html")

        InventoryPage.clickAddBikelight()
        // vérification visibilité du button remove 
        InventoryPage.verifremoveBikelight().should("have.text","Remove")
        InventoryPage.getNbpanier().should("contain","2")
        InventoryPage.clickClickpanier()
        cy.url().should("include","/cart.html")


        CartPage.getCartList().should("contain","Sauce Labs Bike Light")

        CartPage.getCartList().get("[data-test='inventory-item']").eq(0).should("contain","Sauce Labs Backpack")

        CartPage.removeproduit()

        CartPage.getCartList().should("not.have.text","Sauce Labs Backpack")

        CartPage.getNbpanier().should("contain","1")

        CartPage.clickCheckout()
        cy.url().should("include","/checkout-step-one.html")

    })
})