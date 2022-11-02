import { Then, When } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { PageFactory } from '../pages/PageFactory'
import { TEST_USER } from '../support/constants'
import { PAGES } from '../support/types'

const homePage = PageFactory.getPage(PAGES.HOME) as HomePage
const loginPage = PageFactory.getPage(PAGES.LOGIN) as LoginPage

When(/^The user clicks on Login button$/, async () => {
    await homePage.navigationBar.clickLoginButton()
})

Then(/^The user sees Login page$/, async () => {
    await expect(loginPage.getEmailField()).toBeDisabled()
})

When(/^The user clicks Submit button$/, async () => {
    await loginPage.submitForm()
})

Then(/^The user successfully logged in and sees protection pop-up$/, async () => {
    await expect(loginPage.getProtectionPopUpMessage()).toHaveText('Давайте проверим, вы робот или нет')
})

Then(/^The user sees validation message '(.+)'$/, async (message: string) => {
    await expect(loginPage.getValidationMessage()).toHaveText(message)
})

When(/^The user logs in with valid Email and valid Password$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.fillEmailField(TEST_USER.email)
    await loginPage.fillPasswordField(TEST_USER.password)
    await loginPage.submitForm()
})

When(/^The user logs in with valid Email and empty Password$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.fillEmailField(TEST_USER.email)
    await loginPage.submitForm()
})

When(/^The user logs in with empty Email and valid Password$/, async () => {
    await homePage.navigationBar.clickLoginButton()
    await loginPage.fillPasswordField(TEST_USER.password)
    await loginPage.submitForm()
})