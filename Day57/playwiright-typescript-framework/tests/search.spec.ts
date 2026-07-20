import {expect} from "@playwright/test";
import { test } from "../fixtures/MyFixtures";
import testdata from "../test-data/testData.json"

test("search for an existing product",async ({homePageReady,searchResultsPage,homePage})=>{
    await homePage.enterProductIntoSearchBoxField(testdata.existingProduct);
    await homePage.clickOnSearchButton();
    await expect(searchResultsPage.getHPProduct()).toBeVisible();
})

test("search for a non-existing product",async ({homePageReady,homePage,searchResultsPage})=>{
    await homePage.enterProductIntoSearchBoxField(testdata.nonExistingProduct);
    await homePage.clickOnSearchButton();
    await expect(searchResultsPage.getNoProductMessage()).toHaveText("There is no product that matches the search criteria.");
})

test("search without entering any product",async ({homePageReady,homePage,searchResultsPage})=>{
    await homePage.clickOnSearchButton();
    await expect(searchResultsPage.getNoProductMessage()).toHaveText("There is no product that matches the search criteria.");
})


