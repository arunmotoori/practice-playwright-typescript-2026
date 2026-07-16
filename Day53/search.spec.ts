import {test,expect} from "@playwright/test";

test("search for an existing product",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('textbox', { name: 'Search' }).fill("HP");
    await page.locator('#search').getByRole('button').click();
    await expect(page.locator("//a[text()='HP LP3065']")).toBeVisible();
})

test("search for a non-existing product",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('textbox', { name: 'Search' }).fill("Honda");
    await page.locator('#search').getByRole('button').click();
    await expect(page.locator("h2+p")).toHaveText("There is no product that matches the search criteria.");
})

test("search without entering any product",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.locator('#search').getByRole('button').click();
    await expect(page.locator("h2+p")).toHaveText("There is no product that matches the search criteria.");
})


