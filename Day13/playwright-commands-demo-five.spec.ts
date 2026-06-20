import {test} from "@playwright/test";

test("demonstrating content command",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/");
    const sourceCode = await page.content();
    console.log(sourceCode);
    await page.close();
});

test("demonstrating retrieving tagName",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const textAreaField = await page.locator("#ta1");
    const elementTag = await textAreaField.evaluate(element => element.tagName);
    console.log(elementTag);
    await page.close();
});

test("demonstrating retrieving css property",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    const cartTotalButton = await page.locator("//button[@class='btn btn-inverse btn-block btn-lg dropdown-toggle']");
    const cssValue = await cartTotalButton.evaluate(element => getComputedStyle(element).getPropertyValue("font-size"));
    console.log(cssValue);
    await page.close();
});

test("demonstrating retrieving height, width,x and y coordinates",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    const searchBoxField = await page.getByRole('textbox', { name: 'Search' });
    const box = await searchBoxField.boundingBox();
    console.log(box?.height);
    console.log(box?.width);
    console.log(box?.x);
    console.log(box?.y);
    await page.close();
});

test("demonstrating locating multiple elements",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const options = await page.locator("#multiselect1 > option");

    for(let i=0;i<await options.count();i++){
        const text = await options.nth(i).innerText();
        console.log(text);
    }
    
    await page.close();
});

test("demonstrating locating multiple elements two",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    const links = await page.getByRole("link");

    for(let i=0;i<await links.count();i++){
        const linkText = await links.nth(i).innerText();
        console.log(linkText);
    }
    
    await page.close();
});

test("demonstrate no statleElementException Errors",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m6.html");
    const links = await page.locator("a");

    for(let i=0;i<await links.count();i++){
       await links.nth(i).click();  
       await page.waitForLoadState();
       //await page.waitForTimeout(2000);
       await page.goBack();
    }
});

test("demonstrating locating multiple elements three",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    const links = await page.getByRole("link");

    for(let i=0;i<await links.count();i++){
        const linkURL = await links.nth(i).getAttribute("href");
        console.log(linkURL);
    }
    
    await page.close();
});







