///<reference types="cypress"/>

class CartPage{

    elements = {
        Checkout : ()=> cy.get("#checkout"),
        cartList : ()=> cy.get("[data-test='cart-list']"),
        contunieShopping : ()=> cy.get("#continue-shopping"),
        removeBackPack : ()=> cy.get("#remove-sauce-labs-backpack"),
        nbpanier : ()=> cy.get("[data-test='shopping-cart-badge']"),
        
    }


    clickCheckout(){
        this.elements.Checkout().click()
    }
    getCartList(){
        return this.elements.cartList()
    }
    clickContunieShopping(){
        this.elements.contunieShopping().click()
    }
    removeproduit(){
        this.elements.removeBackPack().click()
    }
    getNbpanier(){
        return this.elements.nbpanier()
    }
}
export default new CartPage();