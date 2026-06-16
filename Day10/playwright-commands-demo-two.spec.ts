import {test} from "@playwright/test";

test("demonstrating fill() command",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole("link",{name : "Register"}).click();
    await page.getByRole('textbox', { name: '* First Name' }).fill("Arun");
});

test("demonstrating fill() command two",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator('#textbox1').fill("Playwright");
});

test("demonstrating pressSequentially() command",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('textbox', { name: 'Search' }).pressSequentially("Apple Cinema 30",{delay:1000});
});

test("demonstrating clear() command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator('#textbox1').clear();
    //await page.locator('#textbox1').pressSequentially("Playwright");
});

test("demonstrating check() command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator('#radio1').check();
    await page.locator('#checkbox2').check();
});

test("demonstrating uncheck() command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator('#checkbox1').uncheck();
});

test("demonstrating isChecked() command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const statusOne = await page.getByRole('radio').nth(3).isChecked();
    console.log(statusOne); 
    const statusTwo = await page.getByRole('radio').nth(2).isChecked();
    console.log(statusTwo);
    const statusThree = await page.getByRole('checkbox').nth(4).isChecked();
    console.log(statusThree);
    const statusFour = await page.getByRole('checkbox').nth(3).isChecked();
    console.log(statusFour);
});

test("demonstrating isChecked() command two",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const maleRadioButton = await page.locator('#radio1');
    if(!(await maleRadioButton.isChecked())){
        await maleRadioButton.check();
    }
    const blueCheckboxField = await page.locator('#checkbox2');
    if(!(await blueCheckboxField.isChecked())){
        await blueCheckboxField.check();
    }
});

test("demonstrating isChecked() command three",async ({page})=>{
    
    await page.goto("https://omayo.blogspot.com/");
   
    const orangeCheckboxField = await page.locator('#checkbox1');
    if(await orangeCheckboxField.isChecked()){
        await orangeCheckboxField.uncheck();
    }

});

test("demonstrating textContent() command",async ({page})=>{
    
    await page.goto("https://omayo.blogspot.com/");
    const text = await page.locator("#pah").textContent();
    console.log(text);
    
});

test("demonstrating innerText() command",async ({page})=>{
    
    await page.goto("https://omayo.blogspot.com/");
    const text = await page.locator("#pah").innerText();
    console.log(text);
    
});

test("demonstrating textContent vs innerText() commands",async ({page})=>{
    
    await page.goto("https://arunmotoori.github.io/m5.html");
    // const textOne = await page.locator("#box").textContent();
    // console.log(textOne);
    const textTwo = await page.locator("#box").innerText();
    console.log(textTwo);

});












