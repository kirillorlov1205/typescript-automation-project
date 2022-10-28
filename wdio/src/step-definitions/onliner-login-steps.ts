import { Then, When } from "@wdio/cucumber-framework";
import { HomePage } from "../pages/home_Page";
import { LoginPage } from "../pages/login_Page";
import { PageFactory } from "../pages/page-Factory";
import { TEST_USER } from "../support/constants";
import { PAGES } from "../support/types";

const homePage = PageFactory.getPage(PAGES.HOME) as HomePage;
const loginPage = PageFactory.getPage(PAGES.LOGIN) as LoginPage;

When(/^the User clicks on Login button$/, async () => {
    await homePage.navigationBar.clickLoginButton();
})

Then(/^the User sees Login page$/, async () => {
    await expect(loginPage.getEmailField()).toBeDisabled();
})

When(/^the User clicks Submit button$/, async () => {
    await loginPage.submitForm();
})

Then(/^the User successfully logged in and sees protection pop-up$/, async () => {
    await expect(loginPage.getProtectionPopUpMessage()).toHaveText('Давайте проверим, вы робот или нет')
})

Then(/^the User sees validation message '(.+)'$/, async (message: string) => {
    await expect(loginPage.getValidationMessage()).toHaveText(message);
})

When(/^the User logs in with valid Email and valid Password$/, async () => {
    await homePage.navigationBar.clickLoginButton();
    await loginPage.fillEmailField(TEST_USER.email);
    await loginPage.fillPasswordField(TEST_USER.password);
    await loginPage.submitForm();
})

When(/^the User logs in with valid Email and empty Password$/, async () => {
    await homePage.navigationBar.clickLoginButton();
    await loginPage.fillEmailField(TEST_USER.email);
    await loginPage.submitForm();
})

When(/^the User logs in with empty Email and valid Password$/, async () => {
    await homePage.navigationBar.clickLoginButton();
    await loginPage.fillPasswordField(TEST_USER.password);
    await loginPage.submitForm();
})