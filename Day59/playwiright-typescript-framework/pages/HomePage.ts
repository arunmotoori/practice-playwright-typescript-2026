import {Page,Locator} from "@playwright/test";


export class HomePage {

    readonly page:Page;
    readonly myAccountDropMenu:Locator;
    readonly registerOption:Locator;
    readonly loginOption:Locator;
    readonly searchBoxField:Locator;
    readonly searchButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.myAccountDropMenu = page.getByRole('link', { name: ' My Account' });
        this.registerOption = page.getByRole('link', { name: 'Register' });
        this.loginOption = page.getByRole('link', { name: 'Login' });
        this.searchBoxField = page.getByRole('textbox', { name: 'Search' });
        this.searchButton = page.locator('#search').getByRole('button');
    }

    async openApplication(){
        await this.page.goto("/demo/");
    }

    async clickOnMyAccount(){
        await this.myAccountDropMenu.click();   
    }

    async selectRegisterOption(){
        await this.registerOption.click();
    }

    async navigateToRegisterPage(){
       await this.openApplication();
       await this.clickOnMyAccount();
       await this.selectRegisterOption();
    }

    async navigateToLoginPage(){
        await this.openApplication();
        await this.clickOnMyAccount();
        await this.selectLoginOption();
    }

    async selectLoginOption(){
        await this.loginOption.click();
    }

    async enterProductIntoSearchBoxField(productText:string){
        await this.searchBoxField.fill(productText);
    }

    async clickOnSearchButton(){
        await this.searchButton.click();
    }

}