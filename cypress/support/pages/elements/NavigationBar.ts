import { NAVIGATION_ITEMS } from '../../types/types'

export class NavigationBar {

    constructor() { }

    public getLoginButton = () => {
        cy.task('log', 'Getting login button...')
        return cy.get('div.auth-bar__item--text')
    }

    public clickLoginButton = () => {
        cy.task('log', 'Clicking login button...')
        this.getLoginButton().click()
    }

    public getNavigationItemByInnerLink = (link: NAVIGATION_ITEMS) => {
        cy.task('log', `Getting navigation item by inner "${link}" link...`)
        return cy.get(`a[href = "${link}"] span.b-main-navigation__text`)
    }

    public clickOnNavigationItemByInnerLink = (link: NAVIGATION_ITEMS) => {
        cy.task('log', `Clicking on navigation item by inner "${link}" link...`)
        this.getNavigationItemByInnerLink(link).click()
    }
}