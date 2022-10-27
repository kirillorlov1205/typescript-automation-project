import { HomePage } from "../pageObjects/homePage"
import { NAVIGATION_ITEMS, PAGES, SELECTOR_TYPES } from "../utils/types"
import { expect } from "chai"
import { mkdirSync, rmSync, writeFile } from "fs"
import { Context } from "mocha"
import { LoginPage } from "../pageObjects/loginPage"
import { PageFactory } from "../pageObjects/pageFactory"
import { customDriver } from "../utils/customDriver"
import { TEST_USER } from "../utils/constants"


const homePage: HomePage = PageFactory.getPage(PAGES.HOME) as HomePage
const loginPage: LoginPage = PageFactory.getPage(PAGES.LOGIN) as LoginPage

const screenDir = "hw21/screenshots"
let totalCounter = 1

describe("Onliner tests", () => {
    before(async () => {
        homePage.maximizeWindow()
        rmSync(screenDir, { recursive: true, force: true })
        mkdirSync(screenDir, { recursive: true })
    })

    beforeEach(async () => {
        await homePage.visitPage()
    })

    describe("Onliner navigation menu tests", () => {
        it("Should navigate to the Katalog page", async () => {
            await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.CATALOG)
            expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.CSS, 'a.catalog-navigation__bubble')).getText()).to.be.deep.equal("Все суперцены!")
        })

        it("Should navigate to the Auto shope page from main page", async () => {
            await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.AUTO)
            expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.CSS, 'div.vehicle-form h1')).getText()).to.be.deep.equal("Автобарахолка")
        })

        it("Should navigate to the realt page from main page", async () => {
            await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.REALT)
            expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.CSS, 'a[href="https://r.onliner.by/pk/"] span.project-navigation__sign')).getText()).to.be.deep.equal("Продажа")
        })

        it("Should navigate to the tasks page from main page", async () => {
            await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.TASKS)
            expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.CSS, 'a[href= "/tasks"] span.project-navigation__sign')).getText()).to.be.deep.equal("Заказы")
        })

        it("Should navigate to the baraholka page from main page", async () => {
            await homePage.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS.BARAHOLKA)
            expect(await (await homePage.getPageHeaderByLocator(SELECTOR_TYPES.XPATH, '//div[contains(@class, "b-mnforum-header-i")] //h1')).getText()).to.be.deep.equal("Барахолка")
        })

        describe("Login page test", () => {

            const emptyEmailValidationMessage = "Укажите ник или e-mail"
            const emptyPasswordValidationMessage = "Укажите пароль"

            it("Should successfully log the use in and show protection pop up while login with correct credentials", async () => {
                await homePage.clickLoginButton()
                await loginPage.login(TEST_USER.email, TEST_USER.password)
                expect(await (await loginPage.getProtectionPopUpMessage()).getText()).to.have.string(`Давайте проверим, вы робот или нет`)
            })

            it(`Should show '${emptyEmailValidationMessage}' validation message while loging in with valid email and empty password`, async () => {
                await homePage.clickLoginButton()
                await loginPage.fillPasswordField(TEST_USER.password)
                await loginPage.submitForm()
                expect(await (await loginPage.getValidationMessage()).getText()).to.have.string(emptyEmailValidationMessage)
            })

            it(`Should show '${emptyPasswordValidationMessage}' validation message while loging in with valid email and empty password`, async () => {
                await homePage.clickLoginButton()
                await loginPage.fillEmailField(TEST_USER.email)
                await loginPage.submitForm()
                expect(await (await loginPage.getValidationMessage()).getText()).to.have.string(emptyPasswordValidationMessage)
            })
        })

        afterEach(async function () {
            writeFile(`${screenDir}/${totalCounter++}. ${(this as Context).currentTest?.title}.png`, await customDriver.takeScreenshot(), "base64", (err) => {
                if (err) console.log(err.message)
            })
        })

        after(async () => {
            homePage.quitBrowser()
        })
    })
})