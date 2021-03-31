/// <reference types="cypress" />

context('Oxford API Tests', () => {
    it("GET origin of the word Insurance to test 200 status", () => {
        cy.request(
            {
                url: "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/insurance",
                headers:
                {
                    'app_id': '5f8d1ffd',
                    'app_key': '3a03596f685fc7244bb53655a5c175d2'
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
                    'app_id': '5f8d1ffd',
                    'app_key': '3a03596f685fc7244bb53655a5c175d2'
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
                    'app_id': '5f8d1ffd',
                    'app_key': '3a03596f685fc7244bb53655a5c175d2'
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
                    'app_id': '5f8d1ffd',
                    'app_key': '3a03596f685fc7244bb53655a5c175d2'
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
                    'app_id': '5f8d1ffd',
                    'app_key': '3a03596f685fc7244bb53655a5c175d2'
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

    // as per documentation it does not support translation API does not throw status 400
});