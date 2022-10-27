import { ChromiumWebDriver } from "selenium-webdriver"
import { customDriver } from "../../utils/customDriver"
import { SELECTOR_TYPES } from "../../utils/types"

export class SearchField {

    constructor() { }

    public getSearchField = async () => {
        return await customDriver.findElement(SELECTOR_TYPES.CSS, 'input.fast-search__input')
    }

    public clickSearchField = async () => {
        await (await this.getSearchField()).click()
    }

    // public fillSearchField = async (str: string) => {
    //     await (await this.getSearchField()).sendKeys(str[0])
    //     await this.getSearchModalPage().should('be.visible')
    //     await this.getSearchModalPage().find('input.search__input').sendKeys(str.substring(1))
    // }

    // public getSearchModalPage = async () => {

    //     return await driver.switchTo().iframe('modal-iframe')
    //     return cy.iframe('iframe[class="modal-iframe"]')
    // }

    // public getSearchTabsItemByName = (name: string) => {
    //     cy.task('log', `Getting search tabs item by "${name}" name...`)
    //     return this.getSearchModalPage().xpath(`//div[text() = '${name}']`)
    // }

    // public getSearchFilterItemByName = (name: string) => {
    //     cy.task('log', `Getting search filter item by "${name}" name...`)
    //     return this.getSearchModalPage().xpath(`//a[text() = '${name}']`)
    // }

    // public getCatalogSearchResultsList = () => {
    //     cy.task('log', 'Getting Catalog search result list...')
    //     return this.getSearchModalPage().find('ul.search__results')
    // }

    // public getResultItemFromForumList = () => {
    //     cy.task('log', 'Getting result item from forum list...')
    //     return this.getSearchModalPage().find('div.result__item_forum')
    // }
}