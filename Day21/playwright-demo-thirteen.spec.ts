import {test} from "@playwright/test";
import { Page, Locator } from '@playwright/test';

test("demonstrating hovering mouse on an element",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: 'Desktops', exact: true }).hover();
});

test("demonstrating hovering mouse on an element two",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await page.locator("#blogsmenu").hover();
});

test("demonstrating hovering mouse on an element and select it",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('link', { name: 'Desktops', exact: true }).hover();
    await page.getByRole('link', { name: 'Show AllDesktops' }).hover();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Show AllDesktops' }).click();
});

test("demonstrating - mouse left click",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('textbox', { name: 'Search' }).click({button:"left"});
    //await page.getByRole('textbox', { name: 'Search' }).click();
});

test("demonstrating - mouse right click",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.getByRole('textbox', { name: 'Search' }).click({button:"right"});
});


test("demonstrating - mouse double click",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await page.getByText('Double-click').dblclick();
});

test("demonstrating - drag and Drop using dragTo command",async ({page})=>{
    await page.goto("https://jqueryui.com/droppable/");
    const dragElement = await page.locator('iframe').contentFrame().locator('#draggable');
    const dropElement = await page.locator('iframe').contentFrame().locator('#droppable');
    await dragElement.dragTo(dropElement);
});

test("demonstrating - mouse.up and mouse.down commands",async ({page})=>{
    await page.goto("https://jqueryui.com/droppable/");
    const dragElement = await page.locator('iframe').contentFrame().locator('#draggable');
    const dropElement = await page.locator('iframe').contentFrame().locator('#droppable');
    await dragElement.hover();
    await page.mouse.down();
    await dropElement.hover();
    await page.mouse.up();
});

test("demonstrating - drag and drop in the slider",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/p/page3.html");
    const minLabelElement = await page.locator("//a[@*='price-min-label']");
    await dragAndDropBy(page,minLabelElement,100,0);
});


async function dragAndDropBy(page : Page,locator : Locator,xOffset :number,yOffset :number) {
  const box = await locator.boundingBox();

  const startX = box!.x + box!.width / 2;
  const startY = box!.y + box!.height / 2;

  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.mouse.move(
    startX + xOffset,
    startY + yOffset
  );
  await page.mouse.up();
}

test("demonstrating - mouse move, up and down",async ({page})=>{
    await page.goto("https://paint.js.org/");
    await page.mouse.move(300,300);
    await page.mouse.down();
    await page.mouse.move(500,600);
    await page.mouse.up();
});

test("demonstrating - mouse vertical scrolling",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await page.mouse.wheel(0,1200);
    await page.waitForTimeout(3000);
    await page.mouse.wheel(0,-400);
});

test("demonstrating - mouse horizontal scrolling",async ({page})=>{
    await page.goto("http://omayo.blogspot.com/");
    await page.mouse.wheel(50,0);
    await page.waitForTimeout(3000);
    await page.mouse.wheel(-40,0);
});

test("demonstrating - mouse click on x and y coordinate positions",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/");
    await page.mouse.click(842,83);
});