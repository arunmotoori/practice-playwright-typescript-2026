import {test} from "@playwright/test";

test("demonstrating getByRole",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole("textbox",{name : "Search"}).fill("HP");
});

test("demonstrating getByRole Two",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole("link",{name : "My Account"}).first().click();
    await page.getByRole("link",{name : "Login"}).click();
    await page.getByRole("textbox",{name : "E-Mail Address"}).fill("amotooricap6@gmail.com");
    await page.getByRole("textbox",{name : "Password"}).fill("12345");
    await page.getByRole("button",{name : "Login"}).click();
})

test("demonstrating getByTitle",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByTitle("Shopping Cart").click();
});