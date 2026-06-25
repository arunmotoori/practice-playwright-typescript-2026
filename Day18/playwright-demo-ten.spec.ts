import {test} from "@playwright/test";

test("demonstrating list box - getting currently selected options ",async ({page})=>{

    await page.goto("https://arunmotoori.github.io/m7.html");
    await page.locator("#drop2").selectOption([{label:"Java"},{label:"Python"},{label:"TypeScript"},{label:"CSharp"}]);

    const selectedOptionsText = await page.locator("#drop2").evaluate((e:HTMLSelectElement)=>Array.from(e.selectedOptions).map(option => option.text));
    
    for(const ot of selectedOptionsText){
        console.log(ot);
    }

});

test("demonstrating list box - deselecting options",async ({page})=>{

    await page.goto("https://arunmotoori.github.io/m7.html");
    await page.locator("#drop2").selectOption([{label:"Java"},{label:"Python"},{label:"TypeScript"},{label:"CSharp"}]);

    //Step 1 - Get all the currently selected options
    const selectedOptionsText = await page.locator("#drop2").evaluate((e:HTMLSelectElement)=>Array.from(e.selectedOptions).map(option => option.text));
    
    //Step 2 - Newly selected options
    const newlySelectedOptions = selectedOptionsText.filter(ot => ot!=="Python");
    //const newlySelectedOptions = selectedOptionsText.filter(ot => ot!=="Python" && ot!=="CSharp");

    //Step 3 - Select the newly Selected options
    await page.waitForTimeout(3000);
    await page.locator("#drop2").selectOption(newlySelectedOptions);

});

test("demonstrating list box - deselecting all options",async ({page})=>{

    await page.goto("https://arunmotoori.github.io/m7.html");
    await page.locator("#drop2").selectOption([{label:"Java"},{label:"Python"},{label:"TypeScript"},{label:"CSharp"}]);

    await page.waitForTimeout(5000);
    await page.locator("#drop2").selectOption([]);

});

test("demonstrating list box - is multiple",async ({page})=>{

    await page.goto("https://arunmotoori.github.io/m7.html");
    
    const status = await page.locator("#drop2").evaluate((e:HTMLSelectElement) => e.multiple);
    console.log(status);

});


test("demonstrating list box - get all options",async ({page})=>{

    await page.goto("https://arunmotoori.github.io/m7.html");
    
    const allOptions = await page.locator("#drop2 option").allInnerTexts();
    
    for(const option of allOptions){
        console.log(option);
    }

});

test("demonstrating bootstrap dropdown field",async ({page})=>{

    await page.goto("https://www.hdfc.bank.in/");
    await page.getByRole('button', { name: ' Select Product Type' }).click();
    await page.locator("//li[@class='select-option']/a[text()='Forex Card']").click();
    
});






