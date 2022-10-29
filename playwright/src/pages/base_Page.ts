import { Page } from '@playwright/test'
import { logger } from 'playwright/logger'
import { NavigationBar } from './elements/navigation_Bar'
import { SearchField } from './elements/search_Field'

export class BasePage {

    public navigationBar: NavigationBar
    public searchField: SearchField

    constructor(protected readonly page: Page) {
        this.navigationBar = new NavigationBar(page)
        this.searchField = new SearchField(page)
    }

    public async getPageTitle() {
        logger.info('Getting page title...')
        return await this.page.title()
    }

    public getCurrentUrl() {
        logger.info('Getting current url...')
        return this.page.url()
    }
}