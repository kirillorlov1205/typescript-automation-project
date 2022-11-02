import { test, expect } from '@playwright/test'
import { HomePage } from 'playwright/src/pages/HomePage'
import { PageFactory } from 'playwright/src/pages/PageFactory'
import { PAGES, SEARCH_ITEMS } from 'playwright/src/support/types'

const textForTest = 'test'
let homePage: HomePage

test.describe('Search test', async () => {

    test.beforeEach(async ({ page }) => {
        homePage = PageFactory.getPage(page, PAGES.HOME) as HomePage
        await homePage.visitPage()
    })

    test('Should not open search modal page without providing text', async () => {
        await homePage.searchField.clickSearchField()
        await expect(homePage.searchField.getSearchField()).toBeVisible()
    })

    test(`Should open search modal page while providing text "${textForTest}"`, async () => {
        await homePage.searchField.fillSearchField(textForTest)
        await expect(homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.BARAHOLKA)).toBeVisible()
    })

    test(`Should show search section "в новостях" on modal page while clicking and providing text "${textForTest}"`, async () => {
        await homePage.searchField.fillSearchField(textForTest)
        await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.NEWS).click()
        await expect(homePage.searchField.getSearchFilterItemByName('За полгода')).toBeVisible()
    })

    test(`Should show search section "на барахолке" on modal page while clicking and providing text "${textForTest}"`, async () => {
        await homePage.searchField.fillSearchField(textForTest)
        await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.BARAHOLKA).click()
        await expect(homePage.searchField.getCatalogSearchResultsList()).toBeVisible()
    })

    test(`Should show search section "на форуме" on modal page while clicking and providing text "${textForTest}"`, async () => {
        await homePage.searchField.fillSearchField(textForTest)
        await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.FORUM).click()
        await expect(homePage.searchField.getResultsListFromForum()).toBeVisible()
    })
})