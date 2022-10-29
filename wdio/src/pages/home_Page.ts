import { BasePage } from './base_Page';
import { NavigationBar, navigationBar } from './elements/navigation_Bar';

export class HomePage extends BasePage {

    protected static instance: HomePage;
    public navigationBar: NavigationBar;

    protected constructor() {
        super();
        this.navigationBar = navigationBar;
    }

    public getPageHeaderByName = async (name: string) => {
        switch (name) {
            case 'Catalog':
                return await $('a.catalog-navigation__bubble');
            case 'Auto':
                return await $('div.vehicle-form h1');
            case 'Realt':
                return await $('a[href="https://r.onliner.by/pk/"] span.project-navigation__sign');
            case 'Tasks':
                return await $('a[href= "/tasks"] span.project-navigation__sign');
            case 'Baraholka':
                return await $('//div[contains(@class, "b-mnforum-header-i")] //h1');
            default:
                throw new Error('No such header');
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new HomePage();
        }
        return HomePage.instance;
    }
}