import { Page } from '@playwright/test'
import { logger } from 'playwright/logger'

export class SearchField {

    constructor(protected page: Page) { }

    public getSearchField = () => {
        logger.info('log', 'Getting search field...')
        return this.page.locator('input.fast-search__input')
    }

    public clickSearchField = async () => {
        logger.info('log', 'Clicking search field...')
        await this.getSearchField().click()
    }

    public fillSearchField = async (str: string) => {
        logger.info('log', `Search for "${str}"...`)
        await this.getSearchField().fill(str[0])
        await this.getSearchModalPage().locator('input.search__input').fill(str)
    }

    public getSearchModalPage = () => {
        logger.info('log', 'Getting search modal page...')
        return this.page.frameLocator('iframe[class="modal-iframe"]')
    }

    public getSearchTabsItemByName = (name: string) => {
        logger.info('log', `Getting search tabs item by "${name}" name...`)
        return this.getSearchModalPage().locator(`//div[text() = '${name}']`)
    }

    public getSearchFilterItemByName = (name: string) => {
        logger.info('log', `Getting search filter item by "${name}" name...`)
        return this.getSearchModalPage().locator(`//a[text() = '${name}']`)
    }

    public getCatalogSearchResultsList = () => {
        logger.info('log', 'Getting Catalog search result list...')
        return this.getSearchModalPage().locator('ul.search__results')
    }

    public getResultsListFromForum = () => {
        logger.info('log', 'Getting results list from forum...')
        return this.getSearchModalPage().locator('ul.search__results')
    }
}