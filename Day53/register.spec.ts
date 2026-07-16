import {expect, test} from "@playwright/test";

test("register with mandatory fields",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByRole('textbox', { name: '* First Name' }).fill("Arun");
    await page.getByRole('textbox', { name: '* Last Name' }).fill("Motoori");
    await page.getByRole('textbox', { name: '* E-Mail' }).fill(generateBrandNewEmail());
    await page.getByRole('textbox', { name: '* Telephone' }).fill("1234567890");
    await page.getByRole('textbox', { name: '* Password', exact: true }).fill("12345");
    await page.getByRole('textbox', { name: '* Password Confirm' }).fill("12345");
    await page.getByRole('checkbox').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.locator("#content h1")).toHaveText("Your Account Has Been Created!");
});

test("register with all fields",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByRole('textbox', { name: '* First Name' }).fill("Arun");
    await page.getByRole('textbox', { name: '* Last Name' }).fill("Motoori");
    await page.getByRole('textbox', { name: '* E-Mail' }).fill(generateBrandNewEmail());
    await page.getByRole('textbox', { name: '* Telephone' }).fill("1234567890");
    await page.getByRole('textbox', { name: '* Password', exact: true }).fill("12345");
    await page.getByRole('textbox', { name: '* Password Confirm' }).fill("12345");
    await page.getByRole('radio', { name: 'Yes' }).click();
    await page.getByRole('checkbox').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.locator("#content h1")).toHaveText("Your Account Has Been Created!");
});

test("register without enterting any fields",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.locator(".alert")).toContainText("Warning: You must agree to the Privacy Policy!");
    await expect(page.locator("[name='firstname']+div")).toHaveText("First Name must be between 1 and 32 characters!");
    await expect(page.locator("[name='lastname']+div")).toHaveText("Last Name must be between 1 and 32 characters!");
    await expect(page.locator("[name='email']+div")).toHaveText("E-Mail Address does not appear to be valid!");
    await expect(page.locator("[name='telephone']+div")).toHaveText("Telephone must be between 3 and 32 characters!");
    await expect(page.locator("[name='password']+div")).toHaveText("Password must be between 4 and 20 characters!");
});

function generateBrandNewEmail(){
    return "arun"+Date.now()+"@xyz.com";
}