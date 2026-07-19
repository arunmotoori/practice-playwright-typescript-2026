import {expect} from "@playwright/test";
import {test} from "../fixtures/POMFixtures";

test("login with valid credentails",async ({myAccountPage,loginPage,homePage})=>{
    await homePage.openApplication();
    await homePage.clickOnMyAccount();
    await homePage.selectLoginOption();
    await loginPage.enterEmailAddress("amotooricap6@gmail.com");
    await loginPage.enterPassword("12345");
    await loginPage.clickOnLoginButton();
    await expect(myAccountPage.getLogoutOption()).toBeVisible();
});

test("login with invalid credentails",async ({loginPage,homePage})=>{
    await homePage.openApplication();
    await homePage.clickOnMyAccount();
    await homePage.selectLoginOption();
    await loginPage.enterEmailAddress(generateBrandNewEmail());
    await loginPage.enterPassword("67890");
    await loginPage.clickOnLoginButton();
    await expect(loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login with valid email and invalid password credentails",async ({loginPage,homePage})=>{
    await homePage.openApplication();
    await homePage.clickOnMyAccount();
    await homePage.selectLoginOption();
    await loginPage.enterEmailAddress("amotooricap7@gmail.com");
    await loginPage.enterPassword("67890");
    await loginPage.clickOnLoginButton();
    await expect(loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login with invalid email and valid password credentails",async ({loginPage,homePage})=>{
    await homePage.openApplication();
    await homePage.clickOnMyAccount();
    await homePage.selectLoginOption();
    await loginPage.enterEmailAddress(generateBrandNewEmail());
    await loginPage.enterPassword("12345");
    await loginPage.clickOnLoginButton();
    await expect(loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login without entering credentails",async ({loginPage,homePage})=>{
    await homePage.openApplication();
    await homePage.clickOnMyAccount();
    await homePage.selectLoginOption();
    await loginPage.clickOnLoginButton();
    await expect(loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});


function generateBrandNewEmail(){
    return "arun"+Date.now()+"@xyz.com";
}