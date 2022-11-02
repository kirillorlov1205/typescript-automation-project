import { Page } from '@playwright/test'
import { logger } from 'playwright/logger'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {

    public constructor(page: Page) {
        super(page)
    }

    public getEmailField = () => {
        logger.info('Getting email field on Login page...')
        return this.page.locator('div.auth-input__wrapper input[type = text]')
    }

    public fillEmailField = async (email: string) => {
        logger.info(`Filling email field with '${email}' email...`)
        await this.getEmailField().fill(email)
    }

    public getPasswordField = () => {
        logger.info('Getting password field on Login page...')
        return this.page.locator('div.auth-input__wrapper input[type = password]')
    }

    public fillPasswordField = async (password: string) => {
        logger.info(`Filling password field with '${password}' password...`)
        await this.getPasswordField().fill(password)
    }

    public getSubmitButton = () => {
        logger.info('Getting submit button on Login page...')
        return this.page.locator('div.auth-form__control button[type = submit]')
    }

    public async submitForm() {
        logger.info('Submiting login form...')
        await this.getSubmitButton().click()
    }

    public getProtectionPopUpMessage = () => {
        logger.info('Getting protection pop-up message...')
        return this.page.locator('div.auth-form__mediabox span')
    }

    public getValidationMessage = () => {
        logger.info('Getting validation message on login page...')
        return this.page.locator('div.auth-form__description_error')
    }

    public async login(email: string, password: string) {
        logger.info(`Login in to the system with '${email}' email and '${password}' password...`)
        await this.fillEmailField(email)
        await this.fillPasswordField(password)
        await this.submitForm()
    }
}