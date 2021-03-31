Feature: Comm bank app top header tabs feature
    Scenarios to test comm bank website top header tabs on different viewports


    Scenario Outline: Verify all tabs in the main header of comm bank website
        Given I am in comm bank home page on "<viewport>"
        When I click on "<tab>" tab in the top header on "<viewport>"
        Then I can see "<tab>" tab page is succesfully loaded
        Examples:
            | tab               | viewport   |
            | Banking           | macbook-13 |
            | Home loans        | macbook-13 |
            | Insurance         | macbook-13 |
            | Investing & super | macbook-13 |
            | Business          | macbook-13 |
            | Institutional     | macbook-13 |
            | Banking           | iphone-xr  |
            | Home loans        | iphone-xr  |
            | Insurance         | iphone-xr  |
            | Investing & super | iphone-xr  |
            | Business          | iphone-xr  |
            | Institutional     | iphone-xr  |

