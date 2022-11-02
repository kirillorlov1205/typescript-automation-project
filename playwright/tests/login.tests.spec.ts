import { test, expect } from '@playwright/test'
import { HomePage } from '../src/pages/HomePage'
import { LoginPage } from '../src/pages/LoginPage'
import { PageFactory } from '../src/pages/PageFactory'
import { TEST_USER } from '../src/support/constants'
import { PAGES } from '../src/support/types'

let homePage: HomePage
let loginPage: LoginPage

test.describe('Login page test', async () => {

    test.beforeEach(async ({ page }) => {
        homePage = PageFactory.getPage(page, PAGES.HOME) as HomePage
        loginPage = PageFactory.getPage(page, PAGES.LOGIN) as LoginPage
        await homePage.visitPage()
    })

    const emptyEmailValidationMessage = 'Укажите ник или e-mail'
    const emptyPasswordValidationMessage = 'Укажите пароль'

    test('Should successfully log the use in and show protection pop up while login with correct credentials', async () => {
        await homePage.navigationBar.clickLoginButton()
        await loginPage.login(TEST_USER.email, TEST_USER.password)
        await expect(loginPage.getProtectionPopUpMessage()).toHaveText('Давайте проверим, вы робот или нет')
    })

    test(`Should show '${emptyEmailValidationMessage}' validation message while loging in with valid email and empty password`, async () => {
        await homePage.navigationBar.clickLoginButton()
        await loginPage.fillPasswordField(TEST_USER.password)
        await loginPage.submitForm()
        await expect(loginPage.getValidationMessage()).toHaveText(emptyEmailValidationMessage)
    })

    test(`Should show '${emptyPasswordValidationMessage}' validation message while loging in with valid email and empty password`, async () => {
        await homePage.navigationBar.clickLoginButton()
        await loginPage.fillEmailField(TEST_USER.email)
        await loginPage.submitForm()
        await expect(loginPage.getValidationMessage()).toHaveText(emptyPasswordValidationMessage)
    })
})