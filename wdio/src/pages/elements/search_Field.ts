export class SearchField {

    public getSearchField = async () => {
        return await $('input.fast-search__input')
    }

    public clickSearchField = async () => {
        await (await this.getSearchField()).click()
    }

    public fillSearchField = async (str: string) => {
        await (await this.getSearchField()).setValue(str)
        await this.getSearchModalPage()
        await $('input.search__input').setValue(str)
    }

    public getSearchModalPage = async () => {
        return await browser.switchToFrame(await $('iframe[class="modal-iframe"]'))
    }

    public getSearchTabsItemByName = async (name: string) => {
        return await $(`//div[text() = '${name}']`)
    }

    public getSearchFilterItemByName = async (name: string) => {
        return await $(`//a[text() = '${name}']`)
    }

    public getCatalogSearchResultsList = async () => {
        return await $('ul.search__results')
    }

    public getResultItemFromForumList = async () => {
        return await $('div.result__item_forum')
    }
}

export const searchField = new SearchField()