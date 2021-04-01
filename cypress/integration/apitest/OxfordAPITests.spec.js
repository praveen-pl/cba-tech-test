/// <reference types="cypress" />

context('Oxford API Tests', () => {
    it("GET origin of the word Insurance to test 200 status", () => {
        cy.request(
            {
                url: "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/insurance",
                headers:
                {
                    'app_id': Cypress.env('app_id'),
                    'app_key': Cypress.env('app_key')
                },
                qs:
                {
                    'fields': 'etymologies',
                    'strictMatch': false
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
    })

    it("GET origin of the word Insurance to test 400 status", () => {
        cy.request(
            {
                url: "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/insurance",
                headers:
                {
                    'app_id': Cypress.env('app_id'),
                    'app_key': Cypress.env('app_key')
                },
                qs:
                {
                    'fields': 'etymologies1',
                    'strictMatch': false
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
            });
    })

    it("GET origin of the word Insurance to test 404 status", () => {
        cy.request(
            {
                url: "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/insurance1",
                headers:
                {
                    'app_id': Cypress.env('app_id'),
                    'app_key': Cypress.env('app_key')
                },
                qs:
                {
                    'fields': 'etymologies',
                    'strictMatch': false
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404);
            });
    })

    it("GET translate Test into french to get 404 status", () => {
        cy.request(
            {
                url: "https://od-api.oxforddictionaries.com/api/v2/translations/en/FR/Test",
                headers:
                {
                    'app_id': Cypress.env('app_id'),
                    'app_key': Cypress.env('app_key')
                },
                qs:
                {
                    'strictMatch': false
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404);
            });
    })

    it("GET translate Test into ar to get 200 status", () => {
        cy.request(
            {
                url: "https://od-api.oxforddictionaries.com/api/v2/translations/en/ar/Test",
                headers:
                {
                    'app_id': Cypress.env('app_id'),
                    'app_key': Cypress.env('app_key')
                },
                qs:
                {
                    'strictMatch': false
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
    })

    // as per documentation translation API does not throw status 400
});