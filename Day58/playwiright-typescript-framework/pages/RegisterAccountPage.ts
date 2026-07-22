import {Page,Locator} from "@playwright/test";

export class RegisterAccountPage {

    readonly page:Page;
    readonly firstNameField:Locator;
    readonly lastNameField:Locator;
    readonly emailField:Locator;
    readonly telephoneField:Locator;
    readonly passwordField:Locator;
    readonly passwordConfirmField:Locator;
    readonly privacyPolicyField:Locator;
    readonly continueButton:Locator;
    readonly yesNewsletterOption:Locator;
    readonly privacyPolicyError:Locator;
    readonly firstNameError:Locator;
    readonly lastNameError:Locator;
    readonly emailError:Locator;
    readonly telephoneError:Locator;
    readonly passwordError:Locator;

    constructor(page:Page){
        this.page = page;
        this.firstNameField = page.getByRole('textbox', { name: '* First Name' });
        this.lastNameField = page.getByRole('textbox', { name: '* Last Name' });
        this.emailField = page.getByRole('textbox', { name: '* E-Mail' });
        this.telephoneField = page.getByRole('textbox', { name: '* Telephone' });
        this.passwordField = page.getByRole('textbox', { name: '* Password', exact: true });
        this.passwordConfirmField = page.getByRole('textbox', { name: '* Password Confirm' });
        this.privacyPolicyField = page.getByRole('checkbox');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.yesNewsletterOption = page.getByRole('radio', { name: 'Yes' });
        this.privacyPolicyError = page.locator(".alert");
        this.firstNameError = page.locator("[name='firstname']+div");
        this.lastNameError = page.locator("[name='lastname']+div");
        this.emailError = page.locator("[name='email']+div");
        this.telephoneError = page.locator("[name='telephone']+div");
        this.passwordError = page.locator("[name='password']+div");
    }

    getPasswordError(){
        return this.passwordError;
    }

    getTelephoneError(){
        return this.telephoneError;
    }

    getEmailError(){
        return this.emailError;
    }
    
    getLastNameError(){
        return this.lastNameError;
    }

    getFirstNameError(){
        return this.firstNameError;
    }

    getPrivaryPolicyError(){
        return this.privacyPolicyError;
    }

    async enterFirstName(firstNameText:string){
        await this.firstNameField.fill(firstNameText);
    }

    async enterLastName(lastNameText:string){
        await this.lastNameField.fill(lastNameText);
    }

    async enterEmail(emailText:string){
        await this.emailField.fill(emailText);
    }
    
    async enterTelephoneNumber(telephoneText:string){
        await this.telephoneField.fill(telephoneText);
    }

    async enterPassword(passwordText:string){
        await this.passwordField.fill(passwordText);
    }

    async enterConfirmPassword(passwordText:string){
        await this.passwordConfirmField.fill(passwordText);
    }

    async selectPrivacyPolicyField(){
        await this.privacyPolicyField.check();
    }

    async clickOnContinueButton(){
        await this.continueButton.click();
    }

    async selectYesNewsletterOption(){
        await this.yesNewsletterOption.check();
    }

}