import {expect} from "@playwright/test";
import {test} from "../fixtures/MyFixtures";
import { generateBrandNewEmail} from "../utils/CommonUtils";
import testdata from "../test-data/testData.json";

test("register with mandatory fields",async ({registerPageReady,accountSuccessPage,registerAccountPage})=>{
    await registerAccountPage.enterFirstName(testdata.firstName);
    await registerAccountPage.enterLastName(testdata.lastName);
    await registerAccountPage.enterEmail(generateBrandNewEmail());
    await registerAccountPage.enterTelephoneNumber(testdata.telephoneNumber);
    await registerAccountPage.enterPassword(testdata.validPassword);
    await registerAccountPage.enterConfirmPassword(testdata.validPassword);
    await registerAccountPage.selectPrivacyPolicyField();
    await registerAccountPage.clickOnContinueButton();
    await expect(accountSuccessPage.getHeadingElement()).toHaveText("Your Account Has Been Created!");
});

test("register with all fields",async ({registerPageReady,accountSuccessPage,registerAccountPage})=>{
    await registerAccountPage.enterFirstName(testdata.firstName);
    await registerAccountPage.enterLastName(testdata.lastName);
    await registerAccountPage.enterEmail(generateBrandNewEmail());
    await registerAccountPage.enterTelephoneNumber(testdata.telephoneNumber);
    await registerAccountPage.enterPassword(testdata.validPassword);
    await registerAccountPage.enterConfirmPassword(testdata.validPassword);
    await registerAccountPage.selectYesNewsletterOption();
    await registerAccountPage.selectPrivacyPolicyField();
    await registerAccountPage.clickOnContinueButton();
    await expect(accountSuccessPage.getHeadingElement()).toHaveText("Your Account Has Been Created!");
});

test("register without enterting any fields",async ({registerPageReady,registerAccountPage})=>{
    await registerAccountPage.clickOnContinueButton();
    await expect(registerAccountPage.getPrivaryPolicyError()).toContainText("Warning: You must agree to the Privacy Policy!");
    await expect(registerAccountPage.getFirstNameError()).toHaveText("First Name must be between 1 and 32 characters!");
    await expect(registerAccountPage.getLastNameError()).toHaveText("Last Name must be between 1 and 32 characters!");
    await expect(registerAccountPage.getEmailError()).toHaveText("E-Mail Address does not appear to be valid!");
    await expect(registerAccountPage.getTelephoneError()).toHaveText("Telephone must be between 3 and 32 characters!");
    await expect(registerAccountPage.getPasswordError()).toHaveText("Password must be between 4 and 20 characters!");
});

