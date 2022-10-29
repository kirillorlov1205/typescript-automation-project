import { BasePage } from './base_Page'

export class LoginPage extends BasePage {

    protected static instance: LoginPage;

    protected constructor() {
        super();
    }

    public getEmailField = async () => {
        return await $('div.auth-input__wrapper input[type = text]');
    }

    public fillEmailField = async (email: string) => {
        const emailField = await this.getEmailField();
        await emailField.waitForExist();
        await emailField.setValue(email);
    }

    public getPasswordField = async () => {
        return await $('div.auth-input__wrapper input[type = password]');
    }

    public fillPasswordField = async (password: string) => {
        const passwordField = await this.getPasswordField();
        await passwordField.waitForDisplayed();
        await passwordField.setValue(password);
    }

    public getSubmitButton = async () => {
        return await $('div.auth-form__control button[type = submit]');
    }

    public async submitForm() {
        const getSubmitButton = await this.getSubmitButton();
        await getSubmitButton.waitForExist();
        await getSubmitButton.click();
    }

    public getProtectionPopUpMessage = async () => {
        return await $('div.auth-form__mediabox span');
    }

    public getValidationMessage = async () => {
        return await $('div.auth-form__description_error');
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new LoginPage();
        }
        return LoginPage.instance;
    }
}