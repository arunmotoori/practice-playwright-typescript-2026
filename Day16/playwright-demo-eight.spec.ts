import {test} from "@playwright/test";

test("demonstrating changing default page load timeout",async ({page})=>{
    await page.setDefaultNavigationTimeout(1000);
    await page.goto("https://omayo.blogspot.com/");
});

test("demonstrating waiting example",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator("//button[text()='Check this']").click();
    await page.locator("#dte").check();
});

test("demonstrating for element to dissapear",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator("#deletesuccess").waitFor({state:"hidden"});
    await page.locator("#alert2").click();
});

test("demonstrating waiting for a particular element",async ({page})=>{
    await page.goto("https://omayo.blogspot.com/");
    await page.locator(".dropbtn").click();
    await page.locator("//a[text()='Flipkart']").click({timeout:60000});
});

test("demonstrating handling information alert",async ({page})=>{
    page.on("dialog",async (dialog)=>{
        const typeOfDialog = dialog.type();
        console.log(typeOfDialog);
        const messageOnDialog = dialog.message();
        console.log(messageOnDialog);
        await dialog.accept();
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.locator("//button[text()='Click for JS Alert']").click();
});

test("demonstrating handling confirmation alert",async ({page})=>{
    page.on("dialog",async (dialog)=>{
        const typeOfDialog = dialog.type();
        console.log(typeOfDialog);
        const messageOnDialog = dialog.message();
        console.log(messageOnDialog);
        //await dialog.accept();
        await dialog.dismiss();
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.locator("//button[text()='Click for JS Confirm']").click();
});

test("demonstrating handling prompt alert",async ({page})=>{
    page.on("dialog",async (dialog)=>{
        const typeOfDialog = dialog.type();
        console.log(typeOfDialog);
        const messageOnDialog = dialog.message();
        console.log(messageOnDialog);
        await dialog.accept("Arun Motoori");
        //await dialog.dismiss();
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.locator("//button[text()='Click for JS Prompt']").click();
});


test("demonstrating handling authentical popup",async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/");
    await page.locator("//a[text()='Basic Auth']").click();
});

test("demonstrating handling web push notifications",async ({page})=>{
    await page.goto("https://www.justdial.com/");
});

test("demonstrating handling bootstrap model dialog",async ({page})=>{
    await page.goto("https://www.w3schools.com/bootstrap/bootstrap_modal.asp");
    await page.locator("//button[text()='Click To Open Modal']").click();
    const textOnDialog = await page.locator("#myModal p").innerText();
    console.log(textOnDialog);
    await page.locator("//button[text()='Close']").click();
});

test("demonstrating handling lightbox",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=product/product&product_id=47&search=hp");
    await page.locator("//a[@title='HP LP3065']").first().click();
    await page.locator("//button[text()='×']").click();
});

test("demonstrating handling accept cookie dialog",async ({page})=>{
    await page.goto("https://insiderone.com/web-push-notification/");
    await page.locator("#wt-cli-accept-all-btn").click();
});


