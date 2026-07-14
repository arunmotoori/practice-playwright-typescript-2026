import {test,expect} from "@playwright/test";

test("search for an existing product",async ({page}) => {

    await page.goto("https://tutorialsninja.com/demo");
    await page.getByPlaceholder("Search").fill("HP")
    await page.locator("//button[@class='btn btn-default btn-lg abc']").click();
    await expect(page.locator("//a[text()='HP LP3065']")).toBeVisible();

});