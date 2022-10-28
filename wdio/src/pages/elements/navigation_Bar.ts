import { NAVIGATION_ITEMS } from "../../support/types";

export class NavigationBar {

    public getNavigationItemByInnerLink = async (link: NAVIGATION_ITEMS) => {
        return await $(`a[href = "${link}"] span.b-main-navigation__text`);
    }

    public clickOnNavigationItemByInnerLink = async (link: NAVIGATION_ITEMS) => {
        const navigationItem = await this.getNavigationItemByInnerLink(link);
        await navigationItem.waitForDisplayed();
        await navigationItem.click();
    }

    public getLoginButton = async () => {
        return await $('div.auth-bar__item--text');
    }

    public clickLoginButton = async () => {
        const loginButton = await this.getLoginButton();
        loginButton.waitForDisplayed();
        loginButton.click();
    }
}

export const navigationBar = new NavigationBar();