import {expect} from "@playwright/test";
import { test } from "../fixtures/POMFixtures";

test("search for an existing product",async ({searchResultsPage,homePage})=>{
    await homePage.openApplication();
    await homePage.enterProductIntoSearchBoxField("HP");
    await homePage.clickOnSearchButton();
    await expect(searchResultsPage.getHPProduct()).toBeVisible();
})

test("search for a non-existing product",async ({homePage,searchResultsPage})=>{
    await homePage.openApplication();
    await homePage.enterProductIntoSearchBoxField("Honda");
    await homePage.clickOnSearchButton();
    await expect(searchResultsPage.getNoProductMessage()).toHaveText("There is no product that matches the search criteria.");
})

test("search without entering any product",async ({homePage,searchResultsPage})=>{
    await homePage.openApplication();
    await homePage.clickOnSearchButton();
    await expect(searchResultsPage.getNoProductMessage()).toHaveText("There is no product that matches the search criteria.");
})


