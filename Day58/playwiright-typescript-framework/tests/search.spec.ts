import {test,expect} from "../fixtures/MyFixtures";
import testdata from "../test-data/testData.json"

test("search for an existing product",async ({homePageReady,pages})=>{
    await pages.homePage.enterProductIntoSearchBoxField(testdata.existingProduct);
    await pages.homePage.clickOnSearchButton();
    await expect(pages.searchResultsPage.getHPProduct()).toBeVisible();
})

test("search for a non-existing product",async ({homePageReady,pages})=>{
    await pages.homePage.enterProductIntoSearchBoxField(testdata.nonExistingProduct);
    await pages.homePage.clickOnSearchButton();
    await expect(pages.searchResultsPage.getNoProductMessage()).toHaveText("There is no product that matches the search criteria.");
})

test("search without entering any product",async ({homePageReady,pages})=>{
    await pages.homePage.clickOnSearchButton();
    await expect(pages.searchResultsPage.getNoProductMessage()).toHaveText("There is no product that matches the search criteria.");
})


