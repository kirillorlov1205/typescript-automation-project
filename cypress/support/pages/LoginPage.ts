import { BasePage } from './BasePage'

export class LoginPage extends BasePage {

    public constructor() {
        super()
    }

    public getEmailField = () => {
        cy.task('log', 'Getting email field...')
        return cy.get('div.auth-input__wrapper input[type = text]')
    }

    public fillEmailField = (email: string) => {
        cy.task('log', `Filling email field with "${email}" email...`)
        this.getEmailField().type(email)
    }

    public getPasswordField = () => {
        cy.task('log', 'Getting password field...')
        return cy.get('div.auth-input__wrapper input[type = password]')
    }

    public fillPasswordField = (password: string) => {
        cy.task('log', `Filling password field with "${password}" password...`)
        this.getPasswordField().type(password)
    }

    public getSubmitButton = () => {
        cy.task('log', 'Getting submit button...')
        return cy.get('div.auth-form__control button[type = submit]')
    }

    public submitForm() {
        cy.task('log', 'Submitting form...')
        this.getSubmitButton().click()
    }

    public getProtectionPopUpMessage = () => {
        cy.task('log', 'Getting protection pop-up message...')
        return cy.get('div.auth-form__mediabox span')
    }

    public getValidationMessage = () => {
        cy.task('log', 'Getting validation message...')
        return cy.get('div.auth-form__description_error')
    }
}