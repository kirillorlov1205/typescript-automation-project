import { Page } from '@playwright/test'
import { logger } from 'playwright/logger'
import { BASE_URL } from '../support/constants'
import { BasePage } from './base_Page'

export class HomePage extends BasePage {

    protected url: string

    public constructor(page: Page) {
        super(page)
        this.url = BASE_URL
    }

    public async visitPage() {
        await this.page.goto(this.url)
    }

    public getPageHeaderByName = (name: string) => {
        logger.info('Getting page header by "${name}" name...')
        switch (name) {
            case 'Catalog':
                return this.page.locator('a.catalog-navigation__bubble')
            case 'Auto':
                return this.page.locator('div.vehicle-form h1')
            case 'Realt':
                return this.page.locator('a[href="https://r.onliner.by/pk/"] span.project-navigation__sign')
            case 'Tasks':
                return this.page.locator('a[href= "/tasks"] span.project-navigation__sign')
            case 'Baraholka':
                return this.page.locator('//div[contains(@class, "b-mnforum-header-i")] //h1')
            case 'Forum':
                return this.page.locator('h1.m-title')
            default:
                throw new Error('No such header')
        }
    }
}