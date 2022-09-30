import { NAVIGATION_ITEMS } from "../../types/types";

export class NavigationBar {

    constructor() { }

    public getLoginButton = () => {
        return cy.get("div.auth-bar__item--text");
    };

    public clickLoginButton = () => {
        this.getLoginButton().click();
    };

    public getNavigationItemByInnerLink = (link: NAVIGATION_ITEMS) => {
        return cy.get(`a[href = "${link}"] span.b-main-navigation__text`);
    };

    public clickOnNavigationItemByInnerLink = (link: NAVIGATION_ITEMS) => {
        this.getNavigationItemByInnerLink(link).click();
    };
}