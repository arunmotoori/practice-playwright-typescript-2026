import { Page,Locator } from "@playwright/test";

export class SearchResultsPage{

    readonly page:Page;
    readonly hpProduct:Locator;
    readonly noProductMessageElement:Locator;

    constructor(page:Page){
        this.page = page;
        this.hpProduct = page.locator("//a[text()='HP LP3065']");
        this.noProductMessageElement = page.locator("h2+p");
    }

    getHPProduct(){
        return this.hpProduct;
    }

    getNoProductMessage(){
        return this.noProductMessageElement;
    }


}