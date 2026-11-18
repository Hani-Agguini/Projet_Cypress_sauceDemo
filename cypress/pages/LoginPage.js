///<reference types="cypress"/>

class LoginPage{

    elements = {
        username : ()=> cy.get("#user-name"),
        password : ()=> cy.get('#password'),
        login : ()=> cy.get('#login-button'),
        msgError : ()=> cy.get("[data-test='error']")
    }

    saisirUsername(tmp){
        this.elements.username().type(tmp)
    }
    saisirPassword(tmp){
        this.elements.password().type(tmp)
    }
    clickLogin(){
        this.elements.login().click()
    }
    getmsgerror(){
        return this.elements.msgError()
    }
    loginApp(username,password){
        this.saisirUsername(username)
        this.saisirPassword(password)
        this.clickLogin()
    }
}
export default new LoginPage();