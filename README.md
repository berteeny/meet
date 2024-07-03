# Meet

## Feature 1: Filter Events by City
As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city

    Scenario 1:
    Given the user has not searched for a city,
    When the app is opened
    Then the app will display upcoming events from all cities

    Scenario 2:
    Given the user has begun typing in the search field,
    When they type letters into the field,
    Then they will be able to click on suggested cities from the list

    Scenario 3: 
    Given the user has typed something in the search field,
    When they click on a suggested city
    Then the app will display events in the selected city



## Feature 2: Show/Hide Event Details
As a user,
I should be able to click a show/hide toggle button
So that I can show or hide event details

	Scenario 1:
	Given the user is viewing the list of events,
	When the app is opened
	Then the events will display as collapsed by default

    Scenario 2:
	Given the user has not clicked an event,
	When the user clicks on an event
	Then then event details will be expanded to show details

	Scenario 3:
	Given the user has expanded an event,
	When they click the close button
	Then the event will collapse and hide event details



## Feature 3: Specify Number of Events
As a user,
I should be able to decide/type in the number of events
So I can change the number of events I can see

    Scenario 1: 
	Given the user has not specified a number of events,
	When the user opens the app
	Then the app will display 32 events by default

	Scenario 2:
	Given the user has opened the app,
	When they change the number of events being displayed
	Then the selected number of events will be displayed



## Feature 4: Use the App When Offline
As a user,
I should be able to use the application while offline
So that I can still see and interact with events information without an internet connection

    Scenario 1:
    Given the user has logged into the app without an internet connection,
    When the user views events
    Then the app will display cached data 

    Scenario 2:
    Given the user has begun viewing cached data without an internet connection,
    When the user changes search settings,
    Then the app will display an error




## Feature 5: Add an App Shortcut to the Homescreen
As a user,
I should be able to add a shortcut to the app to my homescreen
So that I can find the app easily and without searching for it

	Scenario 1:
	Given the user has opened the app,
	When the user selects the add-shortcut-to-homescreen option
	Then a shortcut to the app will be added to the user’s homescreen



## Feature 6: Display Charts Visualizing Event Details
As a user,
I should be able to access charts of events 
So that I can see a visual display of the event details

	Scenario 1:
	Given the user has opened the app,
	When the user selects the chart view of upcoming events
	Then the app will display the chart view of events in each city

## Build
This app is built using `create-react-app` and run locally with `npm run start`. It is hosted on Github Pages [here](https://berteeny.github.io/meet/).
