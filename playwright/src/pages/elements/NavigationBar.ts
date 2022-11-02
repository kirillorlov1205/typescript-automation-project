import { Page } from '@playwright/test';
import { logger } from 'playwright/logger';
import { NAVIGATION_ITEMS } from '../../support/types';
export class NavigationBar {

    constructor(protected page: Page) { }

    public getLoginButton = () => {
        logger.info('Getting login button...');
        return this.page.locator('div.auth-bar__item--text');
    }

    public clickLoginButton = async () => {
        logger.info('Clicking on login button...');
        await this.getLoginButton().click();
    }

    public getNavigationItemByInnerLink = (link: NAVIGATION_ITEMS) => {
        logger.info(`Getting Navigation item by '${link}' inner link...`);
        return this.page.locator(`a[href = '${link}'] span.b-main-navigation__text`);
    }

    public clickOnNavigationItemByInnerLink = async (link: NAVIGATION_ITEMS) => {
        logger.info(`Clicking on navigation item by '${link}' inner link...`);
        await this.getNavigationItemByInnerLink(link).click();
    }
}