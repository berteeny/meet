import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/filterEventsByCity.feature");

defineFeature(feature, (test) => {
  test("User hasn't searched for a city, app will show upcoming events in all cities.", ({
    given,
    when,
    then,
  }) => {
    given("the user has not searched for a city,", () => {});

    let AppComponent;
    when("the app is opened", () => {
      AppComponent = render(<App />);
    });

    then("the app will display upcoming events from all cities", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test("User should see the list of suggeste cities when they search for a city", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user has not yet begun typing in the search field,", () => {
      AppComponent = render(<App />);
    });

    let CitySearchDOM;
    when("user types letters into the field,", async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      CitySearchDOM = AppDOM.querySelector("#city-search");
      const citySearchInput = within(CitySearchDOM).queryByRole("textbox");

      await user.type(citySearchInput, "Berlin");
    });

    then(
      "user will be able to click on suggested cities from the list",
      async () => {
        const suggestionListItems =
          within(CitySearchDOM).queryAllByRole("listitem");

        expect(suggestionListItems.length).toBe(2);
      }
    );
  });
  test("User can select a city from the list of suggestions and see only events in that city", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let CitySearchDOM;
    let citySearchInput;
    given("the user has typed something in the search field,", async () => {
      AppComponent = render(<App />);
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      CitySearchDOM = AppDOM.querySelector("#city-search");
      citySearchInput = within(CitySearchDOM).queryByRole("textbox");

      await user.type(citySearchInput, "Berlin");
    });

    let suggestionListItems;
    and("the list of suggestions is showing", () => {
      suggestionListItems = within(CitySearchDOM).queryAllByRole("listitem");

      expect(suggestionListItems.length).toBe(2);
    });

    when("user clicks on a suggested city", async () => {
      const user = userEvent.setup();

      await user.click(suggestionListItems[0]);
    });

    then("the app will display events in the selected city", () => {
      expect(citySearchInput.value).toBe("Berlin, Germany");
    });

    and("user should be able to click on events in that city", async () => {
      const EventListDOM = AppDOM.querySelector("#event-list");
      const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      const allEvents = await getEvents();
      const berlinEvents = allEvents.filter(
        (event) => event.location === citySearchInput.value
      );

      expect(EventListItems).toHaveLength(berlinEvents.length);
    });
  });
});
