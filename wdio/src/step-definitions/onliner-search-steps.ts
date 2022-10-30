import { Then, When } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/home_Page'
import { PageFactory } from '../pages/page-Factory'
import { PAGES, SEARCH_ITEMS } from '../support/types'

const homePage = PageFactory.getPage(PAGES.HOME) as HomePage

When(/^The user clicks on search field$/, async () => {
    await homePage.searchField.clickSearchField()
})

Then(/^The user sees search field and doesn't see search modal page without providing text$/, async () => {
    await expect(homePage.searchField.getSearchField()).toBeDisplayed()
})

When(/^The user provides text "test" in the search field$/, async () => {
    await homePage.searchField.fillSearchField('test')
})

Then(/^The user sees search results in Catalog section while providing text "test"$/, async () => {
    await expect(homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.BARAHOLKA)).toBeDisplayed()
})

When(/^The user provides text "test" in the search field and clicks button "в новостях"$/, async () => {
    await homePage.searchField.fillSearchField('test')
    await (await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.NEWS)).click()
})

Then(/^The user sees search results in "news" section while providing text "test" and clicking "в новостях" button$/, async () => {
    await expect(homePage.searchField.getSearchFilterItemByName('За полгода')).toBeDisplayed()
})

When(/^The user provides text "test" in the search field and clicks button "на барахолке"$/, async () => {
    await homePage.searchField.fillSearchField('test')
    await (await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.BARAHOLKA)).click()
})

Then(/^The user sees search results in "baraholka" section while providing text "test" and clicking "на барахолке" button$/, async () => {
    await expect(homePage.searchField.getCatalogSearchResultsList()).toBeDisplayed()
})

When(/^The user provides text "test" in the search field and clicks button "на форуме"$/, async () => {
    await homePage.searchField.fillSearchField('test')
    await (await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.FORUM)).click()
})

Then(/^The user sees search results in "forum" section while providing text "test" and clicking "на форуме" button$/, async () => {
    await expect(homePage.searchField.getResultItemFromForumList()).toBeDisplayed()
})