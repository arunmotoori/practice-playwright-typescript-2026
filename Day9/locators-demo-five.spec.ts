import {test} from "@playwright/test";

test("demonstrating combining locators",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.locator("//span[text()='My Account']").click();
    await page.locator("//a[text()='Login']").click();
    await page.locator("(//form)[2]").locator("#input-email").fill("a@b.com");
    await page.getByPlaceholder
});