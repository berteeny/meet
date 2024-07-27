Feature: Specify number of events

    Scenario: The app will display 32 events by default
	    Given the user has not specified a number of events,
	    When the user opens the app
	    Then the app will display 32 events by default

	Scenario: The user will change the number of events being displayed
	    Given the user has opened the app,
	    When they change the number of events being displayed
	    Then the selected number of events will be displayed
