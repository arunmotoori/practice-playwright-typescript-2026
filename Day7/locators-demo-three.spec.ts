import {test} from "@playwright/test";

test("demonstrating getByTestId",async ({page})=>{

    await page.goto("https://arunmotoori.github.io/m10.html");
    await page.getByTestId("fName").fill("Arun");

});

test("demonstrating getByTestId two",async ({page})=>{

    await page.goto("https://arunmotoori.github.io/m10.html");
    await page.getByTestId("lastName").fill("Motoori");

});

test("demonstrating getByTestId three",async ({page})=>{

    await page.goto("https://arunmotoori.github.io/m10.html");
    await page.getByTestId("emailAddress").fill("a@b.com");

});

test("demonstrating locator - css selector",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    //await page.locator("css=#ta1").fill("Arun Motoori");
    await page.locator("#ta1").fill("Arun Motoori");

});

test("demonstrating locator - xpath expressions",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    //await page.locator("xpath=//textarea[@id='ta1']").fill("Arun Motoori");
    await page.locator("//textarea[@id='ta1']").fill("Arun Motoori");
    
});

test("demonstrating locator - text",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    //await page.locator("text=Dropdown").last().click();
    //await page.locator("text=dropdown").last().click();
    //await page.locator("text='dropdown'").last().click();
    await page.locator("text='Dropdown'").last().click();
    
});

test("demonstrating locator - id",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    //await page.locator("#ta1").fill("Arun Motoori");
    await page.locator("id=ta1").fill("Arun Motoori");
    
});

test("demonstrating first(), last() and nth()",async ({page})=>{

    await page.goto("https://omayo.blogspot.com/");
    //await page.locator("#LinkList1 a").first().click();
    //await page.locator("#LinkList1 a").nth(1).click();
    await page.locator("#LinkList1 a").last().click();
    
});


