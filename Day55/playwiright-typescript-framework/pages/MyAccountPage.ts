import { Page,Locator } from "@playwright/test";

export class MyAccountPage {

    readonly page:Page;
    readonly logoutOption:Locator;

    constructor(page:Page){
        this.page = page;
        this.logoutOption = page.getByRole('link', { name: 'Logout' });
    }

    getLogoutOption(){
        return this.logoutOption;
    } 


}