export class BasePage {

    get getPageTitle() {
        return browser.getTitle();
    }

    get getCurrentUrl() {
        return browser.getUrl();
    }
}