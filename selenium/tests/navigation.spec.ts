import { HomePage } from '../pageObjects/homePage'
import { NAVIGATION_ITEMS, PAGES } from '../utils/types'
import { mkdirSync, rmSync, writeFile } from 'fs'
import { Context } from 'mocha'
import { PageFactory } from '../pageObjects/pageFactory'
import { customDriver } from '../utils/customDriver'
import { SCREEN_DIR } from '../utils/constants'

const homePage: HomePage = PageFactory.getPage(PAGES.HOME) as HomePage
const suitName = 'Navigation bar tests';
let totalCounter = 1

const pageTitlesMap = {
    'Catalog': 'Все суперцены!',
    'Auto': 'Автобарахолка',
    'Realt': 'Продажа',
    'Tasks': 'Заказы',
    'Baraholka': 'Барахолка',
    'Forum': 'Форум',
}

describe(suitName, () => {

    before(async () => {
        homePage.maximizeWindow()
        rmSync(`${SCREEN_DIR}/${suitName}`, { recursive: true, force: true })
        mkdirSync(`${SCREEN_DIR}/${suitName}`, { recursive: true })
    })

    beforeEach(async () => {
        await homePage.visitPage()
    })

    for (const pageTitle in pageTitlesMap) {
        it(`Should navigate to the ${pageTitle} page`, () => {
            const key = pageTitle.toUpperCase() as keyof typeof NAVIGATION_ITEMS;
            homePage.navigationBar.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS[key]);
            homePage.waitTillPageHeaderIncludeText(pageTitle, pageTitlesMap[pageTitle as keyof typeof pageTitlesMap]);
        });
    }

    afterEach(async function () {
        writeFile(`${SCREEN_DIR}/${suitName}/${totalCounter++}. ${(this as Context).currentTest?.title}.png`,
            await customDriver.takeScreenshot(), 'base64', (err) => {
                if (err) console.log(err.message)
            })
    })
})