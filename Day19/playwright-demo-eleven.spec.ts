import {test} from "@playwright/test";

test("demonstrating automating jquery dropdown",async ({page})=>{
    await page.goto("https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/");
    await page.locator("#justAnInputBox").click();
    await page.locator("(//span[contains(text(),'choice 2 2')])[1]").click();
});

test("demonstrating automating auto-suggestive dropdown",async ({page})=>{
    await page.goto("https://www.yatra.com/");
    await page.locator("//div[contains(@aria-label,'Departure From')]").click();
    await page.locator("#input-with-icon-adornment").fill("Hyderabad");
    await page.locator("//span[text()='HYD']").click();
});

test("demonstrating - without handling frames",async ({page})=>{
    await page.goto("https://letcode.in/frame");
    await page.locator("//input[@name='fname']").fill("Arun");
});

test("demonstrating - by handling frames using frameLocator",async ({page})=>{
    await page.goto("https://letcode.in/frame");
    const frameOne = await page.frameLocator("#firstFr");
    await frameOne.locator("//input[@name='fname']").fill("Arun");
});

test("demonstrating - by handling frames using frame command",async ({page})=>{
    await page.goto("https://letcode.in/frame");
    const frameOne = await page.frame("firstFr");
    await frameOne?.locator("//input[@name='fname']").fill("Arun");
});

test("demonstrating - without handling frames two",async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    await page.locator("//a[text()='Description']").click();
});

test("demonstrating - handling frames using frame name",async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    const frameA = await page.frame("classFrame");
    await frameA?.locator("//a[text()='Description']").click();
});

test("demonstrating - handling frames using url",async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    const frameA = await page.frame({url:"https://docs.oracle.com/javase/8/docs/api/overview-summary.html"});
    await frameA?.locator("//a[text()='Description']").click();
});

test("demonstrating - finding number of frames on the page",async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    const frames = await page.frames();
    console.log(frames.length);
});

test("demonstrating - handling frames using index",async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");
    const frames = await page.frames();
    await frames[3].locator("//a[text()='Description']").click();
});
