/// <reference types='cypress' />

import '@shelex/cypress-allure-plugin'
import './commands'
import 'cypress-xpath'

declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Cypress.Chainable
        }
    }
}