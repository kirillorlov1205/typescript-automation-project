import { PAGES } from "../types/types";
import { HomePage } from "./home_Page";
import { LoginPage } from "./login_Page";

export class PageFactory {
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage();
            case PAGES.LOGIN:
                return new LoginPage();
            default:
                throw new Error("incorrect page name is provided");
        }
    }
}