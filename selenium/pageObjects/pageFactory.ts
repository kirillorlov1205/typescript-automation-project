import { PAGES } from "../utils/types"
import { HomePage } from "./homePage"
import { LoginPage } from "./loginPage"

export class PageFactory {
    constructor() { }

    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage()
            case PAGES.LOGIN:
                return new LoginPage()
            default:
                return new HomePage()
        }
    }
}