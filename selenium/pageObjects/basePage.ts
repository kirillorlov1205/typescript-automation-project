import { expect } from 'chai'
import { customDriver } from '../utils/customDriver'
import { SELECTOR_TYPES } from '../utils/types'
import { NavigationBar } from './elements/NavigationBar'
import { SearchField } from './elements/SearchField'

export class BasePage {

    protected url!: string
    public navigationBar: NavigationBar
    public searchField: SearchField

    protected constructor() {
        this.navigationBar = new NavigationBar()
        this.searchField = new SearchField()
    }

    public async maximizeWindow() {
        await customDriver.windowMax()
    }

    public async quitBrowser() {
        await customDriver.quitBrowser()
    }

    public getPageHeaderByName = async (name: string) => {
        switch (name) {
            case 'Catalog':
                return await customDriver.findElement(SELECTOR_TYPES.CSS, ('a.catalog-navigation__bubble'))
            case 'Auto':
                return await customDriver.findElement(SELECTOR_TYPES.CSS, ('div.vehicle-form h1'))
            case 'Realt':
                return await customDriver.findElement(SELECTOR_TYPES.CSS, ('a[href="https://r.onliner.by/pk/"] span.project-navigation__sign'))
            case 'Tasks':
                return await customDriver.findElement(SELECTOR_TYPES.CSS, ('`a[href= "/tasks"] span.project-navigation__sign`'))
            case 'Baraholka':
                return await customDriver.findElement(SELECTOR_TYPES.CSS, ('div.b-mnforum-header-i h1'))
            case 'Forum':
                return await customDriver.findElement(SELECTOR_TYPES.CSS, ('h1.m-title'))
            default:
                throw new Error('No such header');
        }
    }

    public async waitTillPageHeaderIncludeText(pageHeader: string, headerText: string) {
        const text = await (await this.getPageHeaderByName(pageHeader)).getText()
        expect(text).to.include(headerText)
    }
}