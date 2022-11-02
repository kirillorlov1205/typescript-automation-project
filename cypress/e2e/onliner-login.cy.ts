import { expect } from 'chai'
import { DEFAULT_WAITNG_TIME, TEST_USER } from '../support/constants/constants'
import { HomePage } from '../support/pages/HomePage'
import { LoginPage } from '../support/pages/LoginPage'
import { PageFactory } from '../support/pages/PageFactory'
import { PAGES } from '../support/types/types'

const homePage: HomePage = PageFactory.getPage(PAGES.HOME) as HomePage
const loginPage: LoginPage = PageFactory.getPage(PAGES.LOGIN) as LoginPage

describe('Login page test', () => {

    beforeEach(() => {
        homePage.visitPage()
        cy.intercept('GET', 'https://www.onliner.by/sdapi/pogoda/api/now').as('HomePage')
        cy.wait('@HomePage', {timeout: DEFAULT_WAITNG_TIME / 5}).then(data => {
            expect(data.response?.statusCode).to.equal(200)
        })
    })

    const emptyEmailValidationMessage = 'Укажите ник или e-mail'
    const emptyPasswordValidationMessage = 'Укажите пароль'

    it('Should successfully log the user in and show protection pop up while login with correct credentials', () => {
        homePage.navigationBar.clickLoginButton()
        cy.login(TEST_USER.email, TEST_USER.password)
        loginPage.getProtectionPopUpMessage().should('have.text', 'Давайте проверим, вы робот или нет')
    })

    it(`Should show "${emptyEmailValidationMessage}" validation message while logging in with empty email and valid password`, () => {
        homePage.navigationBar.clickLoginButton()
        loginPage.fillPasswordField(TEST_USER.password)
        loginPage.submitForm()
        loginPage.getValidationMessage().invoke('text').then((text: string) => {
            expect(text).to.include(emptyEmailValidationMessage)
        })
    })

    it(`Should show "${emptyPasswordValidationMessage}" validation message while logging in with valid email and empty password`, () => {
        homePage.navigationBar.clickLoginButton()
        loginPage.fillEmailField(TEST_USER.email)
        loginPage.submitForm()
        loginPage.getValidationMessage().invoke('text').then((text: string) => {
            expect(text).to.include(emptyPasswordValidationMessage)
        })
    })
})