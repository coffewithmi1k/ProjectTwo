import {Given, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../elements/HomePage";

const homePage = new HomePage();

Given('When I open Home Page', () => {
    cy.visit(Cypress.env('baseUrl'));
});

Then('Home Page is opened', () => {
    homePage
        .shouldBeOpened();
})
