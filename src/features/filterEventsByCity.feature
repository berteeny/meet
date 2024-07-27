Feature: Filter events by city

    Scenario: User hasn't searched for a city, app will show upcoming events in all cities.
        Given the user has not searched for a city,
        When the app is opened
        Then the app will display upcoming events from all cities

    Scenario: User should see the list of suggested cities when they search for a city
        Given the user has not yet begun typing in the search field,
        When user types letters into the field,
        Then user will be able to click on suggested cities from the list

    Scenario: User can select a city from the list of suggestions and see only events in that city
        Given the user has typed something in the search field,
        And the list of suggestions is showing
        When user clicks on a suggested city
        Then the app will display events in the selected city
        And user should be able to click on events in that city
