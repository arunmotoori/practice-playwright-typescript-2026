import {test as baseTest} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterAccountPage } from "../pages/RegisterAccountPage";
import { AccountSuccessPage } from "../pages/AccountSuccessPage";
import {LoginPage} from "../pages/LoginPage";
import {MyAccountPage} from "../pages/MyAccountPage";
import {SearchResultsPage} from "../pages/SearchResultsPage";

type MyFixtures = {
    pages:{
        homePage:HomePage;
        registerAccountPage:RegisterAccountPage;
        accountSuccessPage:AccountSuccessPage;
        loginPage:LoginPage;
        myAccountPage:MyAccountPage;
        searchResultsPage:SearchResultsPage;
    }
    registerPageReady:void;
    loginPageReady:void;
    homePageReady:void;
};

export const test = baseTest.extend<MyFixtures>({
    pages:async ({page},use)=>{
        const homePage = new HomePage(page);
        const registerAccountPage = new RegisterAccountPage(page);
        const accountSuccessPage = new AccountSuccessPage(page);
        const loginPage = new LoginPage(page);
        const myAccountPage = new MyAccountPage(page);
        const searchResultsPage = new SearchResultsPage(page);
        await use({homePage,registerAccountPage,accountSuccessPage,loginPage,myAccountPage,searchResultsPage});
    },
    registerPageReady:async ({pages},use)=>{
        await pages.homePage.navigateToRegisterPage();
        await use();
    },
    loginPageReady:async ({pages},use)=>{
       await pages.homePage.navigateToLoginPage();
        await use();
    },
    homePageReady:async ({pages},use)=>{
        await pages.homePage.openApplication();
        await use();
    }
});

export {expect} from "@playwright/test";