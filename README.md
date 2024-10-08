# Meet
Meet is a React app that allows users to see events happening in their city. The app features include the ability to filter cities, change the number of events listed and run the app without an internet connection. The app is configured as a Progressive Web App and includes an "Add to Homescreen" button. More information on features below in "Features" section.

## Development
The app is built with Serverless architecture and AWS Lambda functions for authentication and authorization. The code was written with a TDD approach, employing Jest for Unit & Integration testing and Puppeteer for End-to-End testing. It is hosted on Github Pages [here](https://berteeny.github.io/meet/). 

## Build
This app is built using `$ create-react-app` and run locally with `$ npm run start`. 

## Testing
To run Unit and Integration tests with Jest, navigate to `__tests__` folder and run `$ npm run test`. To run End-to-End tests with Puppeteer, the app must first be running locally on `http://localhost:3000/`, then run ` $ npm run test`.

## Dependancies
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.5.2",
    "atatus-spa": "^4.6.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "recharts": "^2.12.7",
    "web-vitals": "^2.1.4",
    "workbox-background-sync": "^6.6.0",
    "workbox-broadcast-update": "^6.6.0",
    "workbox-cacheable-response": "^6.6.0",
    "workbox-core": "^6.6.0",
    "workbox-expiration": "^6.6.0",
    "workbox-google-analytics": "^6.6.1",
    "workbox-navigation-preload": "^6.6.0",
    "workbox-precaching": "^6.6.0",
    "workbox-range-requests": "^6.6.0",
    "workbox-routing": "^6.6.0",
    "workbox-strategies": "^6.6.0",
    "workbox-streams": "^6.6.0"

## devDependancies

    "gh-pages": "^6.1.1",
    "jest-cucumber": "^4.5.0",
    "puppeteer": "^18.1.0"
  
## Features

### Feature 1: Filter Events by City
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



### Feature 2: Show/Hide Event Details
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



### Feature 3: Specify Number of Events
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



### Feature 4: Use the App When Offline
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




### Feature 5: Add an App Shortcut to the Homescreen
As a user,
I should be able to add a shortcut to the app to my homescreen
So that I can find the app easily and without searching for it

	Scenario 1:
	Given the user has opened the app,
	When the user selects the add-shortcut-to-homescreen option
	Then a shortcut to the app will be added to the user’s homescreen



### Feature 6: Display Charts Visualizing Event Details
As a user,
I should be able to access charts of events 
So that I can see a visual display of the event details

	Scenario 1:
	Given the user has opened the app,
	When the user selects the chart view of upcoming events
	Then the app will display the chart view of events in each city

