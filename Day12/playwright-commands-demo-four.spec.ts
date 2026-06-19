import {test} from "@playwright/test";

test("demonstrate getAttribute command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const buttonLabel = await page.locator("input[class='gsc-search-button']").getAttribute("value");
    console.log(buttonLabel);
    await page.close();
});

test("demonstrate isVisible command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const buttonVisibilityStatus = await page.getByRole('button', { name: 'Button2' }).isVisible();
    console.log(buttonVisibilityStatus);
    await page.close();
});

test("demonstrate isEnabled command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const buttonEnableStatus = await page.getByRole('button', { name: 'Button2' }).isEnabled();
    console.log(buttonEnableStatus);
    await page.close();
});

test("demonstrate isEnabled command two",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const enabledStatus = await page.locator("#dte").isEnabled();
    console.log(enabledStatus);
    await page.close();
});

test("demonstrate isEnabled command three",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.getByRole('button', { name: 'Check this' }).click();
    await page.waitForTimeout(10000);
    const enabledStatus = await page.locator("#dte").isEnabled();
    console.log(enabledStatus);
    await page.close();
});

test("demonstrate isChecked command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const status1 = await page.getByRole('radio').nth(2).isChecked();
    console.log(status1); 
    const status2 = await page.getByRole('radio').nth(3).isChecked();
    console.log(status2); 
    const status3 = await page.getByRole('checkbox').nth(3).isChecked();
    console.log(status3);
    const status4 = await page.getByRole('checkbox').nth(4).isChecked();
    console.log(status4); 
    await page.close();
});

test("demonstrate isVisible command two",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const buttonVisibilityStatus = await page.locator("#hbutton").isVisible();
    console.log(buttonVisibilityStatus);
    await page.close();
});

test("demonstrate isHidden command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const hiddenStatus = await page.locator("#hbutton").isHidden();
    console.log(hiddenStatus);
    await page.close();
});

test("demonstrate isEnabled command four",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const buttonEnableStatus = await page.getByRole('button', { name: 'Button1' }).isEnabled();
    console.log(buttonEnableStatus);
    await page.close();
});

test("demonstrate isDisabled command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const buttonDisabledStatus = await page.getByRole('button', { name: 'Button1' }).isDisabled();
    console.log(buttonDisabledStatus);
    await page.close();
});

test("demonstrate isDisabled command two",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const buttonDisabledStatus = await page.getByRole('button', { name: 'Button2' }).isDisabled();
    console.log(buttonDisabledStatus);
    await page.close();
});

test("demonstrate isEditable command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    const editableStatus = await page.getByRole('textbox', { name: 'search' }).isEditable();
    console.log(editableStatus);
    const editableStatusTwo = await page.locator('#rotb').isEditable();
    console.log(editableStatusTwo);
    await page.close();
});

test("demonstrate Navigation command",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.waitForTimeout(3000);
    await page.goto("https://jqueryui.com/");
    await page.waitForTimeout(3000);
    await page.goBack();
    await page.waitForTimeout(3000);
    await page.goForward();
    await page.waitForTimeout(3000);
    await page.reload();
});

