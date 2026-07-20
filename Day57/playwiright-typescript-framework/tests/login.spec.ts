import {expect} from "@playwright/test";
import {test} from "../fixtures/MyFixtures";
import { generateBrandNewEmail,getValidRandomEmail} from "../utils/CommonUtils";
import testdata from "../test-data/testData.json";

test("login with valid credentails",async ({loginPageReady,myAccountPage,loginPage})=>{
    await loginPage.enterEmailAddress(testdata.validEmailOne);
    await loginPage.enterPassword(testdata.validPassword);
    await loginPage.clickOnLoginButton();
    await expect(myAccountPage.getLogoutOption()).toBeVisible();
});

test("login with invalid credentails",async ({loginPageReady,loginPage})=>{
    await loginPage.enterEmailAddress(generateBrandNewEmail());
    await loginPage.enterPassword(testdata.invalidPassword);
    await loginPage.clickOnLoginButton();
    await expect(loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login with valid email and invalid password credentails",async ({loginPageReady,loginPage})=>{
    await loginPage.enterEmailAddress(getValidRandomEmail());
    await loginPage.enterPassword(testdata.invalidPassword);
    await loginPage.clickOnLoginButton();
    await expect(loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login with invalid email and valid password credentails",async ({loginPageReady,loginPage})=>{
    await loginPage.enterEmailAddress(generateBrandNewEmail());
    await loginPage.enterPassword(testdata.validPassword);
    await loginPage.clickOnLoginButton();
    await expect(loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login without entering credentails",async ({loginPageReady,loginPage})=>{
    await loginPage.clickOnLoginButton();
    await expect(loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});
