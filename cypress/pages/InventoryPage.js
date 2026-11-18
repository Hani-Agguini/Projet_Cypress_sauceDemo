///<reference types="cypress"/>

class InventoryPage{

    elements = {
        addBackpack : ()=> cy.get("#add-to-cart-sauce-labs-backpack"),
        removeBackpack : ()=> cy.get("#remove-sauce-labs-backpack"),
        addBikelight : ()=> cy.get("#add-to-cart-sauce-labs-bike-light"),
        removeBikelight : ()=> cy.get("#remove-sauce-labs-bike-light"),
        clickpanier : ()=> cy.get("[data-test='shopping-cart-link']"),
        nbpanier : ()=> cy.get("[data-test='shopping-cart-badge']")
    }

    clickAddBackpack(){
        this.elements.addBackpack().click()
    }
    verifremoveBackpack(){
        return this.elements.removeBackpack()
    }
    clickAddBikelight(){
        this.elements.addBikelight().click()
    }
    verifremoveBikelight(){
        return this.elements.removeBikelight()
    }
    clickClickpanier(){
        this.elements.clickpanier().click()
    }
    getNbpanier(){
        return this.elements.nbpanier()
    }

}
export default new InventoryPage();
