import {test} from "@playwright/test";
import { expect } from "@playwright/test";

test("demonstrate retrieving all the table headings",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const tableHeadings = await page.locator("#table1 th");
    for(let i=0;i<await tableHeadings.count();i++){
        const tableHeadingText = await tableHeadings.nth(i).innerText();
        console.log(tableHeadingText);
    }
})

test("demonstrate retrieving all the table data",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const tableDatas = await page.locator("#table1 td");
    for(let i=0;i<await tableDatas.count();i++){
        const tableDataText = await tableDatas.nth(i).innerText();
        console.log(tableDataText);
    }
})

test("demonstrate retrieving the table data from 2nd data row and 3rd column",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const data = await page.locator("#table1 tbody>tr:nth-child(2) td:nth-child(3)").innerText();
    console.log(data)
})

test("demonstrating toBeVisible assertion",async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill("amotooricap6@gmail.com");
    await page.getByRole('textbox', { name: 'Password' }).fill("12345");
    await page.getByRole('button', { name: 'Login' }).click();
    //await expect(page.locator("//a[text()='Edit your account information']")).toBeVisible();
    await expect(page.locator("//a[text()='Edit your account information abc']")).toBeVisible();
    // await expect(page.locator("//a[text()='Edit your account information abc']")).toBeVisible({timeout:25000});
})

test("demonstrating toBeHidden assertion",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await expect(page.locator("#hbutton")).toBeHidden();
});

test("demonstrating toHaveText assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator(".alert")).toHaveText("Warning: No match for E-Mail Address and/or Password.");
});

test("demonstrate toContainText assertion",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=product/product&product_id=47&search=hp");
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await expect(page.locator(".alert.alert-success")).toContainText("Success");
});