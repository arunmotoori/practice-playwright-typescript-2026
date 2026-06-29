import {test} from "@playwright/test";


test("demonstrating type keyboard actions",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    //await page.keyboard.type("iMac");
    await page.keyboard.type("iMac",{delay:2000});
});

test("demonstrating press using keyboard",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.keyboard.press("Enter");
});

test("demonstrating press using locator",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.getByRole('textbox', { name: 'E-Mail Address' }).press("Enter");
});


test("demonstrating press Control ACV",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.keyboard.press("Control+V");
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.keyboard.press("Control+V");
});

test("demonstrating hold and release keys",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await page.keyboard.down("Control");
    await page.getByRole('link', { name: 'jqueryui' }).click();
    await page.keyboard.up("Control");
});

test("demonstrating insertText keyboard actions",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    await page.keyboard.insertText("iMac");
});

test("demonstrating scrolling page until element is visible",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await page.getByRole('button', { name: 'Button2' }).scrollIntoViewIfNeeded();
});

test("demonstrating title command without evaluate",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const pageTitle = await page.title();
    console.log(pageTitle);
});

test("demonstrating title command with evaluate",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const pageTitle = await page.evaluate(()=> document.title);
    console.log(pageTitle);
});

test("demonstrating checkbox is in selected state",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const orangeCheckBox = await page.locator('#checkbox1');
    const status = await orangeCheckBox.evaluate((e:HTMLInputElement) =>e.checked);
    console.log(status);
});