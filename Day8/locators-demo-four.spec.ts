import {test} from "@playwright/test";

test("demonstrating filter()",async ({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();

    await page.locator(".inventory_item")
    .filter({hasText:"Sauce Labs Backpack"})
    .getByRole("button",{name : "Add to cart"})
    .click();

});

test("demonstrating frameLocator()",async ({page})=>{

    await page.goto("https://letcode.in/frame");
    const frameOne = await page.frameLocator("#firstFr");
    await frameOne.getByPlaceholder("Enter name").fill("Arun");

});

test("demonstrating page.locator(selector,options)",async ({page})=>{

    //await page.goto("https://www.saucedemo.com/");
    //await page.locator(".form_group",{has:page.locator("#user-name")}).click();
    //await page.locator(".form_group",{hasNot:page.locator("#user-name")}).click();

    // await page.goto("https://www.saucedemo.com/");
    // await page.getByPlaceholder("Username").fill("standard_user");
    // await page.getByPlaceholder("Password").fill("secret_sauce");
    // await page.locator("#login-button").click();

    // await page.locator(".inventory_item",{hasText:"Sauce Labs Backpack"})
    // .getByRole("link").first().click();

    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.locator(".inventory_item_name",{hasText:"Sauce Labs Backpack"}).click();
    //await page.locator(".inventory_item_name",{hasNotText:/Sauce.*/}).click();

});

