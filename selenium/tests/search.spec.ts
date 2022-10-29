import { HomePage } from '../pageObjects/homePage'
import { PAGES, SEARCH_ITEMS } from '../utils/types'
import { expect } from 'chai'
import { mkdirSync, rmSync, writeFile } from 'fs'
import { Context } from 'mocha'
import { PageFactory } from '../pageObjects/pageFactory'
import { customDriver } from '../utils/customDriver'

const homePage: HomePage = PageFactory.getPage(PAGES.HOME) as HomePage
const searchScreenDir = 'selenium/assets/searchScreenDir'
let totalCounter = 1
const textForTest = 'test'

describe('Search test', () => {

    before(async () => {
        await homePage.maximizeWindow()
        rmSync(searchScreenDir, { recursive: true, force: true })
        mkdirSync(searchScreenDir, { recursive: true })
    })

    beforeEach(async () => {
        await homePage.visitPage()
    })

    it('Should not open search modal page without providing text', async () => {
        await homePage.searchField.clickSearchField()
        expect(await homePage.searchField.getSearchField()).to.exist
    })

    it(`Should open search modal page while providing text "${textForTest}"`, async () => {
        await homePage.searchField.fillSearchField(textForTest)
        expect(await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.BARAHOLKA)).to.exist
    })

    it(`Should show search section "в новостях" on modal page while clicking and providing text "${textForTest}"`, async () => {
        await homePage.searchField.fillSearchField(textForTest)
        await (await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.NEWS)).click()
        expect(await homePage.searchField.getSearchFilterItemByName('За полгода')).to.exist
    })

    it(`Should show search section "на барахолке" on modal page while clicking and providing text "${textForTest}"`, async () => {
        await homePage.searchField.fillSearchField(textForTest)
        await (await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.BARAHOLKA)).click()
        expect(await homePage.searchField.getCatalogSearchResultsList()).to.exist
    })

    it(`Should show search section "на форуме" on modal page while clicking and providing text "${textForTest}"`, async () => {
        await homePage.searchField.fillSearchField(textForTest)
        await (await homePage.searchField.getSearchTabsItemByName(SEARCH_ITEMS.FORUM)).click()
        expect(await homePage.searchField.getResultItemFromForumList()).to.exist
    })

    afterEach(async function () {
        writeFile(`${searchScreenDir}/${totalCounter++}. ${(this as Context).currentTest?.title}.png`,
            await customDriver.takeScreenshot(), 'base64', (err) => {
                if (err) console.log(err.message)
            })
    })

    after(async () => {
        await homePage.quitBrowser()
    })
})