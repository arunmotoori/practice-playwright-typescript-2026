import {chromium, test} from "@playwright/test";

test("demonstrate title() command",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m5.html");
    const pageTitle = await page.title();
    console.log(pageTitle);
});

test("demonstrate url() command",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m5.html");
    const pageURL = await page.url();
    console.log(pageURL);
});

test("demonstrate waitForTimeout() command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator("#ta1").fill("Arun Motoori");
    await page.waitForTimeout(5000);
    await page.locator("#ta1").clear();
    await page.waitForTimeout(5000);
    await page.locator("#ta1").fill("Playwright TypeScript");
    await page.waitForTimeout(5000);
    await page.locator("#ta1").fill("Practice Playwright Here");
});

test("demonstrate close command",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m5.html");
    const pageURL = await page.url();
    console.log(pageURL);
    await page.waitForTimeout(5000);
    //await page.close();
});


test("demonstrate close command two",async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://arunmotoori.github.io/m5.html");
    const pageURL = await page.url();
    console.log(pageURL);
    await page.waitForTimeout(5000);
    await page.close(); 
});

test("demonstrate close command three",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.getByRole('link', { name: 'Open a popup window' }).click();
    await page.waitForTimeout(5000);
    await page.close();
});

test("demonstrate close command four",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.getByRole('link', { name: 'Open a popup window' }).click();
    await page.waitForTimeout(5000);
    const context = await page.context();
    await context.close();
});



