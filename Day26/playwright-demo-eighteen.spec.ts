import {test,expect} from "@playwright/test";

test("demonstrating soft assertions",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await expect.soft(page.locator("//div[@id='content']//a[text()='Forgotten Password']")).toBeHidden();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator("//a[text()='Edit your account information']")).toBeVisible();
});

test("demonstrating custom timeout for assertions",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await expect.soft(page.locator("//div[@id='content']//a[text()='Forgotten Password']")).toBeHidden({timeout:25000});
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator("//a[text()='Edit your account information']")).toBeVisible();
});

test("demonstrating toBe Assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const attValue = await page.locator("input.gsc-search-button").getAttribute("value");
    expect(attValue).toBe("Search");
    //await expect(page.locator("input.gsc-search-button")).toHaveAttribute("value","Search");
});

test("demonstrating toEqual assertion",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html")
    const options = await page.locator("#drop1 option");
    const optionsTexts = await options.allInnerTexts();
    expect(optionsTexts).toEqual(["Selenium","RestAssured","Appium","Playwright"])
})

test("demonstrating toBeTruthy assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState();
    const status = await page.locator("//a[text()='Edit your account information']").isVisible();
    console.log(status);
    expect(status).toBeTruthy();
    //await expect(page.locator("//a[text()='Edit your account information']")).toBeVisible();
})

test("demonstrating toBeFalsy assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState();
    const status = await page.locator(".alert").isVisible();
    expect(status).toBeFalsy();
    //await expect(page.locator(".alert")).not.toBeVisible();
})


