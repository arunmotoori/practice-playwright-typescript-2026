import {test,expect} from "../fixtures/MyFixtures";
import { generateBrandNewEmail} from "../utils/CommonUtils";
import testdata from "../test-data/testData.json";

test("register with mandatory fields",async ({registerPageReady,pages})=>{
    await pages.registerAccountPage.enterFirstName(testdata.firstName);
    await pages.registerAccountPage.enterLastName(testdata.lastName);
    await pages.registerAccountPage.enterEmail(generateBrandNewEmail());
    await pages.registerAccountPage.enterTelephoneNumber(testdata.telephoneNumber);
    await pages.registerAccountPage.enterPassword(testdata.validPassword);
    await pages.registerAccountPage.enterConfirmPassword(testdata.validPassword);
    await pages.registerAccountPage.selectPrivacyPolicyField();
    await pages.registerAccountPage.clickOnContinueButton();
    await expect(pages.accountSuccessPage.getHeadingElement()).toHaveText("Your Account Has Been Created!");
});

test("register with all fields",async ({registerPageReady,pages})=>{
    await pages.registerAccountPage.enterFirstName(testdata.firstName);
    await pages.registerAccountPage.enterLastName(testdata.lastName);
    await pages.registerAccountPage.enterEmail(generateBrandNewEmail());
    await pages.registerAccountPage.enterTelephoneNumber(testdata.telephoneNumber);
    await pages.registerAccountPage.enterPassword(testdata.validPassword);
    await pages.registerAccountPage.enterConfirmPassword(testdata.validPassword);
    await pages.registerAccountPage.selectYesNewsletterOption();
    await pages.registerAccountPage.selectPrivacyPolicyField();
    await pages.registerAccountPage.clickOnContinueButton();
    await expect(pages.accountSuccessPage.getHeadingElement()).toHaveText("Your Account Has Been Created!");
});

test("register without enterting any fields",async ({registerPageReady,pages})=>{
    await pages.registerAccountPage.clickOnContinueButton();
    await expect(pages.registerAccountPage.getPrivaryPolicyError()).toContainText("Warning: You must agree to the Privacy Policy!");
    await expect(pages.registerAccountPage.getFirstNameError()).toHaveText("First Name must be between 1 and 32 characters!");
    await expect(pages.registerAccountPage.getLastNameError()).toHaveText("Last Name must be between 1 and 32 characters!");
    await expect(pages.registerAccountPage.getEmailError()).toHaveText("E-Mail Address does not appear to be valid!");
    await expect(pages.registerAccountPage.getTelephoneError()).toHaveText("Telephone must be between 3 and 32 characters!");
    await expect(pages.registerAccountPage.getPasswordError()).toHaveText("Password must be between 4 and 20 characters!");
});

