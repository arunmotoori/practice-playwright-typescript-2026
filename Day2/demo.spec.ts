import {chromium, test} from "@playwright/test";

test("Get started with playwright test",async ({page})=>{

    await page.goto("https://tutorialsninja.com/demo/");
    await page.locator("//span[text()='My Account']").click();
    await page.locator("//a[text()='Login']").click();
    await page.locator("#input-email").fill("amotooricap6@gmail.com");
    await page.locator("#input-password").fill("12345");
    await page.locator("input[value='Login']").click();
    await page.waitForTimeout(5000);

}); 




