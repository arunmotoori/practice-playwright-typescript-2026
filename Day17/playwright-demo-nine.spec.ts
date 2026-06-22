import {test} from "@playwright/test";

test("demonstrate dropdown - selecting by visible text",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const dropdownField = await page.locator("#drop1");
    await page.waitForTimeout(3000);
    await dropdownField.selectOption({label:"Playwright"});
});

test("demonstrate dropdown - selecting by value attribute value",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const dropdownField = await page.locator("#drop1");
    await page.waitForTimeout(3000);
    await dropdownField.selectOption({value:"mno"});
});

test("demonstrate dropdown - selecting by using index",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const dropdownField = await page.locator("#drop1");
    await page.waitForTimeout(3000);
    await dropdownField.selectOption({index:1});
});

test("demonstrate dropdown - get selected option",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const selectedOptionElement = await page.locator("#drop1 option:checked");
    const selectedOption = await selectedOptionElement.innerText();
    console.log(selectedOption);
    //await page.close();
});


test("demonstrate dropdown - get all options",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const options = await page.locator("#drop1 option");
    const dropdownOptions = await options.allInnerTexts();

    for(const option of dropdownOptions){
        console.log(option);
    }

});

test("demonstate dropdown - is multiple or not",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const dropdownField = await page.locator("#drop1");
    const isMultiple = await dropdownField.evaluate((e:HTMLSelectElement) => e.multiple);
    console.log(isMultiple);
});

test("demonstrating list box - selecting option by visible text",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const listBoxField = await page.locator("#drop2");
    await page.waitForTimeout(3000);
    await listBoxField.selectOption({label:"TypeScript"});
});

test("demonstrating list box - selecting option by value of value attribute",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const listBoxField = await page.locator("#drop2");
    await page.waitForTimeout(3000);
    await listBoxField.selectOption({value:"def"});
});

test("demonstrating list box - selecting option using index",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const listBoxField = await page.locator("#drop2");
    await page.waitForTimeout(3000);
    await listBoxField.selectOption({index:3});
});

test("demonstrating list box - selecting multiple options by visible text",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const listBoxField = await page.locator("#drop2");
    await page.waitForTimeout(3000);
    await listBoxField.selectOption([{label:"Java"},{label:"TypeScript"},{label:"CSharp"}]);
});

test("demonstrating list box - selecting multiple options by value of value atrribute",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const listBoxField = await page.locator("#drop2");
    await page.waitForTimeout(3000);
    await listBoxField.selectOption([{value:"abc"},{value:"def"},{value:"xyz"}]);
});

test("demonstrating list box - selecting multiple options by using indexes",async ({page})=>{
    await page.goto("https://arunmotoori.github.io/m7.html");
    const listBoxField = await page.locator("#drop2");
    await page.waitForTimeout(3000);
    await listBoxField.selectOption([{index:0},{index:1},{index:2}]);
});