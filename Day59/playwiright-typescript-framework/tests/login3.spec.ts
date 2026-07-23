import {test,expect} from "../fixtures/MyFixtures";
import { generateBrandNewEmail,getValidRandomEmail} from "../utils/CommonUtils";
import {readCsvFile} from "../utils/CSVReader";

const records = readCsvFile("test-data\\loginData.csv");

records.forEach(record => {
    test(`login with valid credentails ${record.email}`,async ({loginPageReady,pages})=>{
        await pages.loginPage.enterEmailAddress(record.email);
        await pages.loginPage.enterPassword(record.password);
        await pages.loginPage.clickOnLoginButton();
        await expect(pages.myAccountPage.getLogoutOption()).toBeVisible();
    });
})