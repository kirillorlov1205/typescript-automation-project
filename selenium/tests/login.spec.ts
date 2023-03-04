import { HomePage } from '../pageObjects/HomePage'
import { PAGES } from '../utils/types'
import { expect } from 'chai'
import { mkdirSync, rmSync, writeFile } from 'fs'
import { Context } from 'mocha'
import { LoginPage } from '../pageObjects/LoginPage'
import { PageFactory } from '../pageObjects/PageFactory'
import { customDriver } from '../utils/customDriver'
import { TEST_USER, SCREEN_DIR } from '../utils/constants'

const homePage: HomePage = PageFactory.getPage(PAGES.HOME) as HomePage
const loginPage: LoginPage = PageFactory.getPage(PAGES.LOGIN) as LoginPage
const suitName = 'Login page tests';
let totalCounter = 1

describe(suitName, () => {

    const emptyEmailValidationMessage = 'Укажите ник или e-mail'
    const emptyPasswordValidationMessage = 'Укажите пароль'

    before(async () => {
        homePage.maximizeWindow()
        rmSync(`${SCREEN_DIR}/${suitName}`, { recursive: true, force: true })
        mkdirSync(`${SCREEN_DIR}/${suitName}`, { recursive: true })
    })

    beforeEach(async () => {
        await homePage.visitPage()
    })

    it('Should successfully log the use in and show protection pop up while login with correct credentials', async () => {
        await homePage.navigationBar.clickLoginButton()
        await loginPage.login(TEST_USER.email, TEST_USER.password)
        expect(await (await loginPage.getProtectionPopUpMessage()).getText()).to.have.string('Давайте проверим, вы робот или нет')
    })

    it(`Should show '${emptyEmailValidationMessage}' validation message while loging in with valid email and empty password`, async () => {
        await homePage.navigationBar.clickLoginButton()
        await loginPage.fillPasswordField(TEST_USER.password)
        await loginPage.submitForm()
        await loginPage.getValidationMessage()
        expect(await (await loginPage.getValidationMessage()).getText()).to.have.string(emptyEmailValidationMessage)
    })

    it(`Should show '${emptyPasswordValidationMessage}' validation message while loging in with valid email and empty password`, async () => {
        await homePage.navigationBar.clickLoginButton()
        await loginPage.fillEmailField(TEST_USER.email)
        await loginPage.submitForm()
        expect(await (await loginPage.getValidationMessage()).getText()).to.have.string(emptyPasswordValidationMessage)
    })

    afterEach(async function () {
        writeFile(`${SCREEN_DIR}/${suitName}/${totalCounter++}. ${(this as Context).currentTest?.title}.png`,
            await customDriver.takeScreenshot(), 'base64', (err) => {
                if (err) console.log(err.message)
            })
    })
})