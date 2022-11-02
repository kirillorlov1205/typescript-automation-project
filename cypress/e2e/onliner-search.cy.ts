import { HomePage } from '../support/pages/HomePage'
import { PageFactory } from '../support/pages/PageFactory'
import { PAGES, SEARCH_ITEMS } from '../support/types/types'

const homePage: HomePage = PageFactory.getPage(PAGES.HOME) as HomePage
const textForTest = 'test'

describe('Search test', () => {

    beforeEach(() => {
        homePage.visitPage()
    })

    it('Should not open search modal page without providing text', () => {
        homePage.searchField.clickSearchField()
        homePage.searchField.getSearchField().should('be.visible')
    })

    it(`Should open search modal page while providing text "${textForTest}"`, () => {
        homePage.searchField.fillSearchField(textForTest)
        homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.BARAHOLKA).should('be.visible')
    })

    it(`Should show search section "в новостях" on modal page while clicking and providing text "${textForTest}"`, () => {
        homePage.searchField.fillSearchField(textForTest)
        homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.NEWS).click()
        homePage.searchField.getSearchFilterItemByName('За полгода').should('be.visible')
    })

    it(`Should show search section "на барахолке" on modal page while clicking and providing text "${textForTest}"`, () => {
        homePage.searchField.fillSearchField(textForTest)
        homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.BARAHOLKA).click()
        homePage.searchField.getCatalogSearchResultsList().should('be.visible')
    })

    it(`Should show search section "на форуме" on modal page while clicking and providing text "${textForTest}"`, () => {
        homePage.searchField.fillSearchField(textForTest)
        homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.FORUM).click()
        homePage.searchField.getResultItemFromForumList().should('be.visible')
    })
})