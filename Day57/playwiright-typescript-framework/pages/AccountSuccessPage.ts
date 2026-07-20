import {Page,Locator} from "@playwright/test";

export class AccountSuccessPage{

    readonly page:Page;
    readonly pageHeading:Locator;

    constructor(page:Page){
        this.page = page;
        this.pageHeading = page.locator("#content h1");
    }

    getHeadingElement(){
        return this.pageHeading;
    }

}