import { PAGES } from 'cypress/support/types/types'
import { HomePage } from '../../e2e/pages/HomePage'
import { LoginPage } from './LoginPage'

export class PageFactory {
    public static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage()
            case PAGES.LOGIN:
                return new LoginPage()
            default:
                throw new Error('incorrect page name is provided')
        }
    }
}