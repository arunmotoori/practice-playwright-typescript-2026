import {test,expect} from "@playwright/test";

let page:any;

test.beforeAll("login to application",async ({browser})=>{
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.getByRole('button', { name: 'Login' }).click();
});

test.afterAll("logout from application",async ({})=>{
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
})

test("search with existing product",async ({})=>{
    await page.locator("[name='search']").fill("HP");
    await page.locator(".btn.btn-default.btn-lg").click();
    await expect(page.locator("//a[text()='HP LP3065']")).toBeVisible();
});

test("search with non-existing product",async ({})=>{
    await page.locator("//a[text()='Qafox.com']").click();
    await page.locator("[name='search']").fill("Honda");
    await page.locator(".btn.btn-default.btn-lg").click();
    await expect(page.locator("h2+p")).toHaveText("There is no product that matches the search criteria.");
});

test("search without any product",async ({})=>{
    await page.locator("//a[text()='Qafox.com']").click();
    await page.locator(".btn.btn-default.btn-lg").click();
    await expect(page.locator("h2+p")).toHaveText("There is no product that matches the search criteria.");
});