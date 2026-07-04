import {expect, test} from "@playwright/test";

test("demonstrating contains assertion",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const options = await page.locator("#drop1 option");
    const optionsTexts = await options.allInnerTexts();
    expect(optionsTexts).toContain("Appium");
    //expect(optionsTexts).toContain("Cypress");
});

test("demonstrating toBeGreaterThan assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const rows = await page.locator("#table1 tr");
    const rowsCount = await rows.count();
    expect(rowsCount).toBeGreaterThan(3);
    //expect(rowsCount).toBeGreaterThan(13);
})

test("demonstrating toBeLessThan assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const rows = await page.locator("#table1 tr");
    const rowsCount = await rows.count();
    expect(rowsCount).toBeLessThan(8);
    //expect(rowsCount).toBeLessThan(3);
})

test("demonstrating failure message for assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const rows = await page.locator("#table1 tr");
    const rowsCount = await rows.count();
    expect(rowsCount,"Number of rows are not less than 3").toBeLessThan(3);
})

test("demonstrate failure message assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await expect(page.locator("#input-firstname"),"name attribute value not maching with firstname for first name field").toHaveAttribute("name","firstnameABC");
});

test("demonstrate failed assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await expect(page.locator("#input-firstname")).toHaveAttribute("name","firstnameabc");
});


