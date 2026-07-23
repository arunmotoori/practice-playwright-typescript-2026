import {test,expect} from "../fixtures/MyFixtures";
import { generateBrandNewEmail,getValidRandomEmail} from "../utils/CommonUtils";
import testdata from "../test-data/testData.json";
//import dataArray from "../test-data/loginData.json";
import fs from "fs";
import {parse} from "csv-parse/sync";

const fileContent = fs.readFileSync("test-data\\loginData.csv","utf8");

const records = parse(fileContent,{columns:true,skip_empty_lines:true}) as {email:string,password:string}[];

records.forEach(record => {
    test(`login with valid credentails ${record.email}`,async ({loginPageReady,pages})=>{
        await pages.loginPage.enterEmailAddress(record.email);
        await pages.loginPage.enterPassword(record.password);
        await pages.loginPage.clickOnLoginButton();
        await expect(pages.myAccountPage.getLogoutOption()).toBeVisible();
    });
})

test("login with invalid credentails",async ({loginPageReady,pages})=>{
    await pages.loginPage.enterEmailAddress(generateBrandNewEmail());
    await pages.loginPage.enterPassword(testdata.invalidPassword);
    await pages.loginPage.clickOnLoginButton();
    await expect(pages.loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login with valid email and invalid password credentails",async ({loginPageReady,pages})=>{
    await pages.loginPage.enterEmailAddress(getValidRandomEmail());
    await pages.loginPage.enterPassword(testdata.invalidPassword);
    await pages.loginPage.clickOnLoginButton();
    await expect(pages.loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login with invalid email and valid password credentails",async ({loginPageReady,pages})=>{
    await pages.loginPage.enterEmailAddress(generateBrandNewEmail());
    await pages.loginPage.enterPassword(testdata.validPassword);
    await pages.loginPage.clickOnLoginButton();
    await expect(pages.loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});

test("login without entering credentails",async ({loginPageReady,pages})=>{
    await pages.loginPage.clickOnLoginButton();
    await expect(pages.loginPage.getAlertMessage()).toContainText("Warning: No match for E-Mail Address and/or Password.");
});
