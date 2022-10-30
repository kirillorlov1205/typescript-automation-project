import { By, Locator, until, WebDriver, WebElement } from 'selenium-webdriver'
import { driver } from '../configs/driver'
import { DEFAULT_WAITNG_TIME } from './constants'
import { SELECTOR_TYPES } from './types'

class CustomDriver {
    protected readonly driver: WebDriver

    constructor() {
        this.driver = driver
    }

    public async openUrl(url: string) {
        await this.driver.get(url)
    }

    public async windowMax() {
        await this.driver.manage().window().maximize()
    }

    public async quitBrowser() {
        await this.driver.quit()
    }

    public async findElement(selectorType: SELECTOR_TYPES, locatorString: string) {
        const locator: Locator = By[selectorType](locatorString)
        return await this.waitForElementIsLocated(locator)
    }

    public async waitForElementIsLocated(locator: Locator) {
        return await this.driver.wait(until.elementLocated(locator), DEFAULT_WAITNG_TIME)
    }

    public async takeScreenshot() {
        return await this.driver.takeScreenshot()
    }

    public async switchToIframe(selectorType: SELECTOR_TYPES, locator: string) {
        const iframe: WebElement = await this.findElement(selectorType, locator)
        return await this.driver.switchTo().frame(iframe)
    }
}

export const customDriver = new CustomDriver()