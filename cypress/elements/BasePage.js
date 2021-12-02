export  default class BasePage {
    url;

    shouldBeOpened() {
        const matcher = new RegExp(`/${this.url}`);

        cy.url()
            .should('match', matcher);

        return this;
    }
}
