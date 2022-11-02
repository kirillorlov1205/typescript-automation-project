import { BasePage } from "./BasePage"
import { BASE_URL } from "../utils/constants"
import { customDriver } from "../utils/customDriver"
import { NavigationBar } from "./elements/NavigationBar"

export class HomePage extends BasePage {

    constructor() {
        super()
        this.url = BASE_URL
    }

    public async visitPage() {
        return await customDriver.openUrl(this.url)
    }
}