import {test,expect} from "@playwright/test";

test("login with valid credentails",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});

test("login with invalid credentails",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill(generateBrandNewEmail());
    await page.getByRole('textbox', { name: 'Password' }).fill("67890");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator(".alert")).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login with valid email and invalid password credentails",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap7@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("67890");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator(".alert")).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login with invalid email and valid password credentails",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill(generateBrandNewEmail());
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator(".alert")).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login without entering credentails",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator(".alert")).toContainText("Warning: No match for E-Mail Address and/or Password.");
});


function generateBrandNewEmail(){
    return "arun"+Date.now()+"@xyz.com";
}