import {chromium, test,Page,Locator, expect} from "@playwright/test";

test("login with valid credentials",async ({page}) => {

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.locator("#input-email").fill("amotooricap6@gmail.com");
    await page.locator("#input-password").fill("12345");
    await page.locator("//input[@value='Login']").click();
    await expect(page.locator("//a[text()='Edit your account information']")).toBeVisible();

});

test("login with invalid credentials",async ({page}) => {

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.locator("#input-email").fill("amotooricap67@gmail.com");
    await page.locator("#input-password").fill("1234567890");
    await page.locator("//input[@value='Login']").click();
    await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).toContainText("Warning: No match for E-Mail Address and/or Password.");

});


