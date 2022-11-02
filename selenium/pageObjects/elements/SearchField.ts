import { customDriver } from '../../utils/customDriver'
import { SELECTOR_TYPES } from '../../utils/types'

export class SearchField {

    constructor() { }

    public getSearchField = async () => {
        return await customDriver.findElement(SELECTOR_TYPES.CSS, 'input.fast-search__input')
    }

    public clickSearchField = async () => {
        await (await this.getSearchField()).click()
    }

    public getSearchFieldInIframe = async () => {
        return await customDriver.findElement(SELECTOR_TYPES.CSS, 'input.search__input')
    }

    public fillSearchField = async (str: string) => {
        await (await this.getSearchField()).sendKeys(str[0])
        await this.getSearchModalPage()
        await (await this.getSearchFieldInIframe()).sendKeys(str.substring(1))
    }

    public getSearchModalPage = async () => {
        return await customDriver.switchToIframe(SELECTOR_TYPES.CSS, 'iframe[class="modal-iframe"]')
    }

    public getSearchTabsItemByName = async (name: string) => {
        return await customDriver.findElement(SELECTOR_TYPES.XPATH, `//div[text() = '${name}']`)
    }

    public getSearchFilterItemByName = async (name: string) => {
        return await customDriver.findElement(SELECTOR_TYPES.XPATH, `//a[text() = '${name}']`)
    }

    public getCatalogSearchResultsList = async () => {
        return await customDriver.findElement(SELECTOR_TYPES.CSS,'ul.search__results')
    }

    public getResultItemFromForumList = async () => {
        return await customDriver.findElement(SELECTOR_TYPES.CSS, 'div.result__item_forum')
    }
}