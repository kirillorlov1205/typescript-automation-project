import { customDriver } from "../utils/customDriver"

export class BasePage {

    public async maximizeWindow() {
        await customDriver.windowMax()
    }

    public async quitBrowser() {
        await customDriver.quitBrowser()
    }
}