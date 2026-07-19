import {Page,Locator} from "@playwright/test";

export class LoginPage {

    readonly page:Page;
    readonly emailAddressField:Locator;
    readonly passwordField:Locator;
    readonly loginButton:Locator;
    readonly alertMessageElement:Locator;

    constructor(page:Page){
        this.page = page;
        this.emailAddressField = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.alertMessageElement = page.locator(".alert");
    }

    async enterEmailAddress(emailAddressText:string){
        await this.emailAddressField.fill(emailAddressText);
    }

    async enterPassword(passwordText:string){
        await this.passwordField.fill(passwordText);
    }
    
    async clickOnLoginButton(){
        await this.loginButton.click();
    }

    getAlertMessage(){
        return this.alertMessageElement;
    }



}