import {expect} from "@playwright/test";
import {test} from "../fixtures/POMFixtures";

test("register with mandatory fields",async ({accountSuccessPage,registerAccountPage,homePage})=>{
    await homePage.openApplication();
    await homePage.clickOnMyAccount();
    await homePage.selectRegisterOption();
    await registerAccountPage.enterFirstName("Arun");
    await registerAccountPage.enterLastName("Motoori");
    await registerAccountPage.enterEmail(generateBrandNewEmail());
    await registerAccountPage.enterTelephoneNumber("1234567890");
    await registerAccountPage.enterPassword("12345");
    await registerAccountPage.enterConfirmPassword("12345");
    await registerAccountPage.selectPrivacyPolicyField();
    await registerAccountPage.clickOnContinueButton();
    await expect(accountSuccessPage.getHeadingElement()).toHaveText("Your Account Has Been Created!");
});

test("register with all fields",async ({accountSuccessPage,registerAccountPage,homePage})=>{
    await homePage.openApplication();
    await homePage.clickOnMyAccount();
    await homePage.selectRegisterOption();
    await registerAccountPage.enterFirstName("Arun");
    await registerAccountPage.enterLastName("Motoori");
    await registerAccountPage.enterEmail(generateBrandNewEmail());
    await registerAccountPage.enterTelephoneNumber("1234567890");
    await registerAccountPage.enterPassword("12345");
    await registerAccountPage.enterConfirmPassword("12345");
    await registerAccountPage.selectYesNewsletterOption();
    await registerAccountPage.selectPrivacyPolicyField();
    await registerAccountPage.clickOnContinueButton();
    await expect(accountSuccessPage.getHeadingElement()).toHaveText("Your Account Has Been Created!");
});

test("register without enterting any fields",async ({homePage,registerAccountPage})=>{
    await homePage.openApplication();
    await homePage.clickOnMyAccount();
    await homePage.selectRegisterOption();
    await registerAccountPage.clickOnContinueButton();
    await expect(registerAccountPage.getPrivaryPolicyError()).toContainText("Warning: You must agree to the Privacy Policy!");
    await expect(registerAccountPage.getFirstNameError()).toHaveText("First Name must be between 1 and 32 characters!");
    await expect(registerAccountPage.getLastNameError()).toHaveText("Last Name must be between 1 and 32 characters!");
    await expect(registerAccountPage.getEmailError()).toHaveText("E-Mail Address does not appear to be valid!");
    await expect(registerAccountPage.getTelephoneError()).toHaveText("Telephone must be between 3 and 32 characters!");
    await expect(registerAccountPage.getPasswordError()).toHaveText("Password must be between 4 and 20 characters!");
});

function generateBrandNewEmail(){
    return "arun"+Date.now()+"@xyz.com";
}