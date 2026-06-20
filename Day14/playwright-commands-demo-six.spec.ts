import {test} from "@playwright/test";

test("demonstrating allTextContents command",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    const links = await page.locator("//a");
    const linkTexts = await links.allTextContents();
    
    for(const linkText of linkTexts){
        console.log(linkText);
    }

    await page.close();
});

test("demonstrating allInnerTexts command",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    const links = await page.locator("//a");
    const linkTexts = await links.allInnerTexts();
    
    for(const linkText of linkTexts){
        console.log(linkText);
    }

    await page.close();
});

test("demonstrating inputValue command",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.getByPlaceholder("First Name").fill("Arun");
    const text = await page.getByPlaceholder("First Name").inputValue();
    console.log(text);
    //await page.close();
});

// test("demonstrate multiple windows problem",async ({page})=>{
//     await page.goto("https://omayo.blogspot.com/");
//     await page.locator("#selenium143").click();
//     await page.locator("//a[text()='What is Selenium?']").click();
// });

test("demonstrate handling multiple windows",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const context = await page.context();
    const newTabPromise = context.waitForEvent("page");
    await page.locator("#selenium143").click();
    const newTabPage = await newTabPromise;
});

test("demonstrate handling multiple windows two",async ({context})=>{
    
    const parentPage = await context.newPage();
    await parentPage.goto("https://omayo.blogspot.com/");
    
    const newTabPromise = context.waitForEvent("page");
    await parentPage.locator("#selenium143").click();
    const newTabPage = await newTabPromise;
    
    await parentPage.bringToFront();
    await parentPage.locator("#ta1").fill("Arun Motoori");

    await newTabPage.bringToFront();
    await newTabPage.locator("//a[text()='What is Selenium?']").click();

    await parentPage.bringToFront();
    await parentPage.locator("//input[@name='q']").fill("Playwright TypeScript");

}); 