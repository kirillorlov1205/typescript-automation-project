import { BasePage } from "./base_Page";

export class LoginPage extends BasePage {

    public constructor() {
        super();
    }

    public getEmailField = () => {
        return cy.get("div.auth-input__wrapper input[type = text]");
    };

    public fillEmailField = (email: string) => {
        this.getEmailField().type(email);
    };

    public getPasswordField = () => {
        return cy.get("div.auth-input__wrapper input[type = password]");
    };

    public fillPasswordField = (password: string) => {
        this.getPasswordField().type(password);
    };

    public getSubmitButton = () => {
        return cy.get("div.auth-form__control button[type = submit]");
    };

    public submitForm() {
        this.getSubmitButton().click();
    }

    public getProtectionPopUpMessage = () => {
        return cy.get("div.auth-form__mediabox span");
    };

    public getValidationMessage = () => {
        return cy.get("div.auth-form__description_error");
    };
}