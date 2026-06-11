import {test} from "@playwright/test";

test("demonstrating getByAltText",async ({page})=>{
    await page.goto("https://selenium143.blogspot.com/");
    await page.waitForTimeout(3000);
    await page.getByAltText("Selenium143 ").click();
});

test("demonstrating getByAltText two",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByAltText("MacBook",{exact:true}).click();
});

test("demonstrating getByPlaceholder",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.getByPlaceholder("First Name").fill("Arun");
});

test("demonstrating getByText",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register");
    await page.getByText("Continue").click();
});

test("demonstrating getByLabel",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login");
    await page.getByLabel("E-Mail Address").fill("amotooricap6@gmail.com");
})

test("demonstrating getByLabel two",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m9.html");
    await page.getByLabel("Phone Number").fill("9876543210");
    await page.getByLabel("Subscribe to newsletter").click();
})
