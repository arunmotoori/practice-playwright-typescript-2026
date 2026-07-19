import {test as baseTest} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterAccountPage } from "../pages/RegisterAccountPage";
import { AccountSuccessPage } from "../pages/AccountSuccessPage";
import {LoginPage} from "../pages/LoginPage";
import {MyAccountPage} from "../pages/MyAccountPage";
import {SearchResultsPage} from "../pages/SearchResultsPage";

type MyPOMFixtures = {
    homePage:HomePage;
    registerAccountPage:RegisterAccountPage;
    accountSuccessPage:AccountSuccessPage;
    loginPage:LoginPage;
    myAccountPage:MyAccountPage;
    searchResultsPage:SearchResultsPage;
};

export const test = baseTest.extend<MyPOMFixtures>({
    homePage:async ({page},use)=>{
        const homePage = new HomePage(page);
        await use(homePage);
    },
    registerAccountPage:async ({page},use)=>{
        const registerAccountPage = new RegisterAccountPage(page);
        await use(registerAccountPage);
    },
    accountSuccessPage:async ({page},use)=>{
        const accountSuccessPage = new AccountSuccessPage(page);
        await use(accountSuccessPage);
    },
    loginPage:async ({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    myAccountPage:async ({page},use)=>{
        const myAccountPage = new MyAccountPage(page);
        await use(myAccountPage);
    },
    searchResultsPage:async ({page},use)=>{
        const searchResultsPage = new SearchResultsPage(page);
        await use(searchResultsPage);
    }
});