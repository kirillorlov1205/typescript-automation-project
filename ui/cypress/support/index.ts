/// <reference types="cypress" />

import "@shelex/cypress-allure-plugin";
import "./commands";

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Cypress.Chainable
        }
    }
}