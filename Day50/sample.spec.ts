import {test} from "@playwright/test";

test.beforeAll("beforeAll hook demonstration",async ()=>{
    console.log("beforeAll got executed");
})

test.afterAll("afterAll hook demonstration",async ()=>{
    console.log("afterAll got executed")
})

test.beforeEach("beforeEach hook demonstration",async ()=>{
    console.log("beforeEach got executed");
});

test.afterEach("afterEach hook demonstration",async ()=>{
    console.log("afterEach got executed");
});

test("practice test 1",async ({page})=>{
    console.log("start of practice test 1");
    await page.goto("https://tutorialsninja.com/demo/");
    console.log(await page.title());
    console.log("end of practice test 1");
})

test("practice test 2",async ({page})=>{
    console.log("start of practice test 2");
    await page.goto("https://tutorialsninja.com/demo/");
    console.log(await page.title());
    console.log("end of practice test 2");
})

test("practice test 3",async ({page})=>{
    console.log("start of practice test 3");
    await page.goto("https://tutorialsninja.com/demo/");
    console.log(await page.title());
    console.log("end of practice test 3");
})

test("practice test 4",async ({page})=>{
    console.log("start of practice test 4");
    await page.goto("https://tutorialsninja.com/demo/");
    console.log(await page.title());
    console.log("end of practice test 4");
})

test("practice test 5",async ({page})=>{
    console.log("start of practice test 5");
    await page.goto("https://tutorialsninja.com/demo/");
    console.log(await page.title());
    console.log("end of practice test 5");
})

test("practice test 6",async ({page})=>{
    console.log("start of practice test 6");
    await page.goto("https://tutorialsninja.com/demo/");
    console.log(await page.title());
    console.log("end of practice test 6");
})

test("practice test 7",async ({page})=>{
    console.log("start of practice test 7");
    await page.goto("https://tutorialsninja.com/demo/");
    console.log(await page.title());
    console.log("end of practice test 7");
})