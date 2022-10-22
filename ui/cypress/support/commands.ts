/// <reference types='cypress' />

import { LoginPage } from './pages/login_Page'
import { PageFactory } from './pages/page_Factory'
import { PAGES } from './types/types'
import 'cypress-iframe'

const loginPage = PageFactory.getPage(PAGES.LOGIN) as LoginPage

Cypress.Commands.add('login', (email: string, password: string) => {
    loginPage.fillEmailField(email)
    loginPage.fillPasswordField(password)
    loginPage.submitForm()
})