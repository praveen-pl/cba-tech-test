import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given(`I am in comm bank home page on {string}`, (viewport) => {
    cy.viewport(viewport);
    cy.visit("/");
})

When(`I click on {string} tab in the top header on {string}`, (tabname, viewport) => {
    // check the breaking point for desktop vs mobile view
    // based on that add check for more viewport here for mobile view
    if (viewport == 'iphone-xr') {
        cy.get('.icon-menu').click();
        switch (tabname) {
            case 'Banking':
                cy.get('div.hamburger-menu>div.hamburger-menu-list>ul>li>a[href*="/banking.html?ei=mv_banking"]').click();
                break;
            case 'Home loans':
                cy.get('div.hamburger-menu>div.hamburger-menu-list>ul>li>a[href*="/home-loans.html?ei=mv_home-loans"]').click();
                break;
            case 'Insurance':
                cy.get('div.hamburger-menu>div.hamburger-menu-list>ul>li>a[href*="/insurance.html?ei=mv_insurance"]').click();
                break;
            case 'Investing & super':
                cy.get('div.hamburger-menu>div.hamburger-menu-list>ul>li>a[href*="/investing-and-super.html?ei=mv_investing-super"]').click();
                break;
            case 'Business':
                cy.get('div.hamburger-menu>div.hamburger-menu-list>ul>li>a[href*="/business.html?ei=mv_business"]').click();
                break;
            case 'Institutional':
                cy.get('div.hamburger-menu>div.hamburger-menu-list>ul>li>a[href*="/institutional.html?ei=mv_institutional"]').click();
                break;
            default:
                break;
        }
    }
    else {
        switch (tabname) {
            case 'Banking':
                cy.get('ul.commbank-list>li>a[href*="/banking.html?ei=mv_banking"]').click();
                break;
            case 'Home loans':
                cy.get('ul.commbank-list>li>a[href*="/home-loans.html?ei=mv_home-loans"]').click();
                break;
            case 'Insurance':
                cy.get('ul.commbank-list>li>a[href*="/insurance.html?ei=mv_insurance"]').click();
                break;
            case 'Investing & super':
                cy.get('ul.commbank-list>li>a[href*="/investing-and-super.html?ei=mv_investing-super"]').click();
                break;
            case 'Business':
                cy.get('ul.commbank-list>li>a[href*="/business.html?ei=mv_business"]').click();
                break;
            case 'Institutional':
                cy.get('ul.commbank-list>li>a[href*="/institutional.html?ei=mv_institutional"]').click();
                break;
            default:
                break;
        }
    }
})

Then(`I can see {string} tab page is succesfully loaded`, (tabname) => {
    switch (tabname) {
        case 'Banking':
            cy.url().should("include", "/banking.html?ei=mv_banking");
            break;
        case 'Home loans':
            cy.url().should("include", "/home-loans.html?ei=mv_home-loans");
            break;
        case 'Insurance':
            cy.url().should("include", "/insurance.html?ei=mv_insurance");
            break;
        case 'Investing & super':
            cy.url().should("include", "/investing-and-super.html?ei=mv_investing-super");
            break;
        case 'Business':
            cy.url().should("include", "/business.html?ei=mv_business");
            break;
        case 'Institutional':
            cy.url().should("include", "/institutional.html?ei=mv_institutional");
            break;
        default:
            break;
    }
})

