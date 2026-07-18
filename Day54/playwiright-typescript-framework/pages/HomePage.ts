import {Page,Locator} from "@playwright/test";


export class HomePage {

    page:Page;
    myAccountDropMenu:Locator;
    registerOption:Locator;

    constructor(page:Page){
        this.page = page;
        this.myAccountDropMenu = page.getByRole('link', { name: ' My Account' });
        this.registerOption = page.getByRole('link', { name: 'Register' });
    }

    async openApplication(){
        await this.page.goto("https://tutorialsninja.com/demo/");
    }

    async clickOnMyAccount(){
        await this.myAccountDropMenu.click();   
    }

    async selectRegisterOption(){
        await this.registerOption.click();
    }





}