import {test} from "@playwright/test";

test("demonstrating handling calendar using fill",async ({page})=>{
    await page.goto("http://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html");
    await page.locator('#datepicker').fill("11/14/2027")
});

test("demonstring handling calendar",async ({page})=>{

    const expectedYear = "2026";
    const expectedMonth = "June";
    const expectedDay = "30";

    await page.goto("http://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html");
    await page.locator('#datepicker').click();
    
    let actualMonth = await page.locator(".ui-datepicker-month").innerText();
    let actualYear = await page.locator(".ui-datepicker-year").innerText();

    while(actualYear!==expectedYear || actualMonth!==expectedMonth){
       await page.locator("//span[text()='Next']").click();
       actualMonth = await page.locator(".ui-datepicker-month").innerText();
       actualYear = await page.locator(".ui-datepicker-year").innerText();
    }

    let xpath = "//td[@data-handler='selectDay']/a[text()='"+expectedDay+"']";
    await page.locator(xpath).click();

})

test("demonstrate getting number of rows in the table",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const rows = await page.locator("#table1 tr");
    console.log(await rows.count())
})

test("demonstrate getting number of headings in the table",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const headings = await page.locator("#table1 th");
    console.log(await headings.count())
})

test("demonstrate getting number of columns in the table",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const columns = await page.locator("#table1 th");
    console.log(await columns.count())
})

test("demonstrate retrieving all the rows in the table",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const rows = await page.locator("#table1 tr");
    for(let i=0;i<await rows.count();i++){
        const rowText = await rows.nth(i).innerText();
        console.log(rowText);
    }
})

test("demonstrate retrieving all the first column data in the table",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const firstColumnData = await page.locator("#table1 tr>td:nth-child(1)");
    for(let i=0;i<await firstColumnData.count();i++){
        const columnDataText = await firstColumnData.nth(i).innerText();
        console.log(columnDataText);
    }
})

test("demonstrate retrieving all the third column data in the table",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    const thirdColumnData = await page.locator("#table1 tr>td:nth-child(3)");
    for(let i=0;i<await thirdColumnData.count();i++){
        const columnDataText = await thirdColumnData.nth(i).innerText();
        console.log(columnDataText);
    }
})


