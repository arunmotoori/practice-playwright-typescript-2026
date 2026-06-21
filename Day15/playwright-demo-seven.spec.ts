import {test} from "@playwright/test";

test("demonstrating handling windows",async ({context})=>{

    const parentPage = await context.newPage();
    await parentPage.goto("https://omayo.blogspot.com/");

    const popupWindowPromise = context.waitForEvent("page");
    await parentPage.locator("//a[text()='Open a popup window']").click();
    const popupWindowPage = await popupWindowPromise;

    await parentPage.bringToFront();
    await parentPage.locator("#ta1").fill("Arun Motoori");
    await parentPage.waitForTimeout(3000);

    await popupWindowPage.bringToFront();
    const headingText = await popupWindowPage.locator("//h3").innerText();
    console.log(headingText);
    await parentPage.waitForTimeout(3000);

    await parentPage.bringToFront();
    await parentPage.locator("#ta1").clear();
    await parentPage.waitForTimeout(3000);


});

test("demonstrating handling windows two",async ({context})=>{

        const parentWindow = await context.newPage();
        await parentWindow.goto("https://omayo.blogspot.com/");

        const childTabWindowPromise = context.waitForEvent("page");
        await parentWindow.locator("#selenium143").click();
        const childTabWindow =  await childTabWindowPromise;

        const childPopupWindowPromise = context.waitForEvent("page");
        await parentWindow.locator("//a[text()='Open a popup window']").click();
        const childPopupWindow = await childPopupWindowPromise;

        await parentWindow.bringToFront();
        await parentWindow.locator("#ta1").fill("Arun Motoori");
        await parentWindow.waitForTimeout(3000);

        await childTabWindow.bringToFront();
        await childTabWindow.locator("//a[text()='What is Selenium?']").click();
        await childTabWindow.waitForTimeout(3000);
        await childTabWindow.close();

        await childPopupWindow.bringToFront();
        const headingText = await childPopupWindow.locator("//h3").innerText();
        console.log(headingText);
        await childPopupWindow.waitForTimeout(3000);
        await childPopupWindow.close();

        await parentWindow.bringToFront();
        await parentWindow.locator("#ta1").clear();
        await parentWindow.waitForTimeout(3000);
        await parentWindow.close();

});

test("demonstrating auto-waiting mechanism",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator(".dropbtn").click();
    await page.locator("//a[text()='Flipkart']").click();
});

test("demonstrating timeout error",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator(".dropbtn").click();
    await page.locator("//a[text()='FlipkartABC']").click();
});

test("demonstrating setting default timeout",async ({page})=>{
    await page.setDefaultTimeout(10000);
    await page.goto("https://omayo.blogspot.com/");
    await page.locator(".dropbtn").click();
    await page.locator("//a[text()='FlipkartABC']").click();
});

test("demonstrating waitForLoadState",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator("//a[text()='jqueryui']").click();
    await page.waitForLoadState();
    await page.close();
});




