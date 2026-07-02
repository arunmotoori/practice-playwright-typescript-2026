import {test,expect} from "@playwright/test";

test("demonstrate toHaveValue assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.getByRole('textbox', { name: '* First Name' }).fill("Arun");
    await expect(page.getByRole('textbox', { name: '* First Name' })).toHaveValue("Arun");
});

test("demonstrate toHaveAttribute assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await expect(page.locator("#input-firstname")).toHaveAttribute("name","firstname");
});

test("demonstrate toHaveId assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await expect(page.getByRole('textbox', { name: '* First Name' })).toHaveId("input-firstname");
});

test("demonstrate toHaveClass assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await expect(page.getByRole('textbox', { name: 'Search' })).toHaveClass("form-control input-lg");
});


test("demonstrate toHaveCount assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await expect(page.locator("#table1 tr")).toHaveCount(5);
});

test("demonstrate toBeChecked assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await expect(page.locator('#checkbox1')).toBeChecked();
    //await expect(page.locator('#checkbox2')).toBeChecked();
});

test("demonstrate toBeChecked assertion radio",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    //await expect(page.getByRole('radio').nth(3)).toBeChecked();
    await expect(page.getByRole('radio').nth(2)).toBeChecked();
});

test("demonstrate toBeEnabled assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    //await expect(page.getByRole('button', { name: 'Button2' })).toBeEnabled();
    await expect(page.getByRole("button",{name: "Button1"})).toBeEnabled();
});

test("demonstrate toBeDisabled assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    //await expect(page.getByRole('button', { name: 'Button2' })).toBeDisabled();
    await expect(page.getByRole("button",{name: "Button1"})).toBeDisabled();
});

test("demonstrate toBeEditable assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    //await expect(page.getByRole('textbox', { name: 'search' })).toBeEditable();
    await expect(page.locator('#rotb')).toBeEditable();
});

test("demonstrate toBeFocused assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    //await expect(page.locator("#input-email")).toBeFocused();
    await page.locator("#input-email").click();
    await expect(page.locator("#input-email")).toBeFocused();
});

test("demonstrate toHaveURL assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await page.getByRole('link', { name: 'jqueryui' }).click();
    await expect(page).toHaveURL("https://jqueryui.com/");
});

test("demonstrate toHaveTitle assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await page.getByRole('link', { name: 'jqueryui' }).click();
    await expect(page).toHaveTitle("jQuery UI");
});

test("demonstrate not assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await expect(page.locator('#checkbox2')).not.toBeChecked();
});

test("demonstrate not assertion two",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.locator("#input-email").fill("amotooricap6@gmail.com");
    await page.locator("#input-password").fill("12345");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator(".alert")).not.toBeVisible();
    await expect(page.locator("//a[text()='Edit your account information']")).toBeVisible();
});

test("login with valid credentials",async ({page}) => {

    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.locator("#input-email").fill("amotooricap6@gmail.com");
    await page.locator("#input-password").fill("1234567890");
    await page.locator("//input[@value='Login']").click();
    await page.waitForTimeout(2000);
    await expect(page.locator("//div[@class='alert alert-danger alert-dismissible']")).not.toHaveText("Warning: No match for E-Mail Address and/or Password.");
    await page.waitForTimeout(2000);
    await page.close();

});