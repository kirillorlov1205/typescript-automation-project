import { test, expect } from '@playwright/test'
import { HomePage } from '../src/pages/HomePage'
import { PageFactory } from '../src/pages/PageFactory'
import { NAVIGATION_ITEMS, PAGES } from '../src/support/types'

let homePage: HomePage

test.describe('Onliner navigation bar tests', async () => {

  test.beforeEach(async ({ page }) => {
    homePage = PageFactory.getPage(page, PAGES.HOME) as HomePage
    await homePage.visitPage()
  })

  const pageTitlesMap = {
    'Catalog': 'Все суперцены!',
    'Auto': 'Автобарахолка',
    'Realt': 'Продажа',
    'Tasks': 'Заказы',
    'Baraholka': 'Барахолка',
    'Forum': 'Форум',
  }

  for (const pageTitle in pageTitlesMap) {
    test(`Should navigate to the ${pageTitle} page`, async () => {
      const key = pageTitle.toUpperCase() as keyof typeof NAVIGATION_ITEMS
      await homePage.navigationBar.clickOnNavigationItemByInnerLink(NAVIGATION_ITEMS[key])
      await expect(homePage.getPageHeaderByName(pageTitle)).toHaveText(pageTitlesMap[pageTitle as keyof typeof pageTitlesMap])
    })
  }
})