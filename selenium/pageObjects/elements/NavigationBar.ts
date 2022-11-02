import { NAVIGATION_ITEMS } from '../../utils/types';
import { customDriver } from '../../utils/customDriver';
import { SELECTOR_TYPES } from '../../utils/types';

export class NavigationBar {

    constructor() { }

    public getLoginButton = async () => {
        return await customDriver.findElement(SELECTOR_TYPES.CSS, 'div.auth-bar__item--text')
    }

    public clickLoginButton = async () => {
        await (await this.getLoginButton()).click()
    }

    public async getNavigationItemByInnerLink(link: NAVIGATION_ITEMS) {
        return await customDriver.findElement(SELECTOR_TYPES.CSS, `a[href = '${link}'] span.b-main-navigation__text`)
    }

    public async clickOnNavigationItemByInnerLink(item: NAVIGATION_ITEMS) {
        await (await this.getNavigationItemByInnerLink(item)).click()
    }
}