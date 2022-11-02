import { Page } from '@playwright/test'
import { logger } from 'playwright/logger'
import { PAGES } from '../support/types'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'

export class PageFactory {
    static getPage(page: Page, pageName: PAGES) {
        logger.info(`Getting page by '${pageName}' page name...`)
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage(page)
            case PAGES.LOGIN:
                return new LoginPage(page)
            default:
                throw new Error('incorrect page name is provided')
        }
    }
}