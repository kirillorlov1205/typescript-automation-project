import { BasePage } from "./basePage"
import { BASE_URL } from "../utils/constants"
import { customDriver } from "../utils/customDriver"
import { NavigationBar } from "./elements/navigation_Bar"

export class HomePage extends BasePage {

    constructor() {
        super()
        this.url = BASE_URL
    }

    public async visitPage() {
        return await customDriver.openUrl(this.url)
    }
}