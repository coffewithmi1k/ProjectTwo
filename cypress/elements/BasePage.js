export  default class BasePage {
    url;

    shouldBeOpened() {
        const matcher = new RegExp(`/${this.url}`, 'euroHouse');

        cy.url()
            .should('match', matcher);

        return this;
    }
}
