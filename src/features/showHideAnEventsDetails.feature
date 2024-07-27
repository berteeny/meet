Feature: Show and Hide Events' details

    Scenario: User has opened the app, event details are collapsed
	    Given the user is viewing the list of events,
	    When the app is opened
	    Then the events will display as collapsed by default

    Scenario: Event details will expand when show details button is clicked
	    Given the user has not clicked an event,
	    When the user clicks on an event details button
	    Then then event details will be expanded to show details

	Scenario: Event details will collapse when hide details button is clicked
	    Given the user has expanded an event,
	    When they click the close button
	    Then the event will collapse and hide event details
