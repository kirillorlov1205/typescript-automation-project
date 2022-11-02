import { Given, Then, When } from '@wdio/cucumber-framework'
import { HomePage } from '../pages/HomePage'
import { PageFactory } from '../pages/PageFactory'
import { NAVIGATION_ITEMS, PAGES } from '../support/types'

const homePage = PageFactory.getPage(PAGES.HOME) as HomePage

Given(/^The user opens web page (.+)$/, async (link: string) => {
    await browser.url(link)
})

When(/^The user clicks on (.+) navigation button$/, async (pageName: NAVIGATION_ITEMS) => {
    await homePage.navigationBar.clickOnNavigationItemByInnerLink(pageName)
})

Then(/^The user sees (.+) page and page header has text (.+)$/, async (pageName: string, headerText: string) => {
    const pageHeader = await homePage.getPageHeaderByName(pageName)
    expect(pageHeader).toHaveText(headerText)
})