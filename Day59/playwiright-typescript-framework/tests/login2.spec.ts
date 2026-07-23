import {test,expect} from "../fixtures/MyFixtures";
import { generateBrandNewEmail,getValidRandomEmail} from "../utils/CommonUtils";
import { getCellValue } from "../utils/ExcelReader";

test("demonstrating excel reading",async ()=>{
    const data = await getCellValue("test-data\\loginData.xlsx","Sheet1",2,1);
    console.log(data);
});

test(`login with valid credentails`,async ({loginPageReady,pages})=>{
        const email = await getCellValue("test-data\\loginData.xlsx","Sheet1",2,1);
        await pages.loginPage.enterEmailAddress(email);
        const password = await getCellValue("test-data\\loginData.xlsx","Sheet1",2,2);
        await pages.loginPage.enterPassword(password);
        await pages.loginPage.clickOnLoginButton();
        await expect(pages.myAccountPage.getLogoutOption()).toBeVisible();
});