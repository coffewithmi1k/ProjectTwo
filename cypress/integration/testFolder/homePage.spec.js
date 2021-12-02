import HomePage from "../../elements/HomePage";

describe('Home Page: ', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
    })

    it('should verify home page can be opened', () => {
        homePage
            .shouldBeOpened();
    })
})
