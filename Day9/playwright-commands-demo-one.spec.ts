import {chromium, firefox, test, webkit} from "@playwright/test";

test("demonstrating launching chrome browser",async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByPlaceholder("Search").fill("HP");
    await page.waitForTimeout(5000);
});


test("demonstrating launching edge browser",async ()=>{
    const browser = await chromium.launch({channel:"msedge"});
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByPlaceholder("Search").fill("HP");
    await page.waitForTimeout(5000);
});

test("demonstrating launching firefox browser",async ()=>{
    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByPlaceholder("Search").fill("HP");
    await page.waitForTimeout(5000);
});

test("demonstrating launching safari browser",async ()=>{
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByPlaceholder("Search").fill("HP");
    await page.waitForTimeout(5000);
});

test("demonstrating click()",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.locator("//span[text()='My Account']").click();
    await page.locator("//a[text()='Register']").click();
});

test("demonstrating forcing the click()",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m8.html");
    await page.waitForTimeout(5000);
    await page.getByRole("button",{name:"Submit"}).click({force:true});
});

test("demonstrating dispatchEvent click",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m8.html");
    await page.waitForTimeout(5000);
    await page.getByRole("button",{name:"Submit"}).dispatchEvent('click');
});


