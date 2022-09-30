import { expect } from "chai";
import { NavigationBar } from "./elements/navigation_Bar";

export class BasePage {

    protected url!: string;
    public navigationBar: NavigationBar;

    constructor() {
        this.navigationBar = new NavigationBar();
    }

    public getPageTitle() {
        return cy.title();
    }

    public visitPage() {
        cy.visit(this.url);
    }

    public getCurrentUrl() {
        return cy.url();
    }

    public getPageHeaderByName = (name: string) => {
        switch (name) {
            case "Catalog":
                return cy.get("a.catalog-navigation__bubble");
            case "Auto":
                return cy.get("div.vehicle-form h1");
            case "Realt":
                return cy.get("a[href='https://r.onliner.by/pk/'] span.project-navigation__sign");
            case "Tasks":
                return cy.get("a[href= '/tasks'] span.project-navigation__sign");
            case "Baraholka":
                return cy.get("div.b-mnforum-header-i h1");
            default:
                throw new Error("No such header");
        }
    };

    public waitTillPageHeaderIncludeText(pageHeader: string, headerText: string) {
        this.getPageHeaderByName(pageHeader).invoke("text").then((text: string) => {
            expect(text).to.include(headerText);
        });
    }
}