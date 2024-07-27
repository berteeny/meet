import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("The app will display 32 events by default", ({ given, when, then }) => {
    given("the user has not specified a number of events,", () => {});

    let AppComponent;
    when("the user opens the app", () => {
      AppComponent = render(<App />);
    });

    then("the app will display 32 events by default", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const eventListItems = within(EventListDOM).queryAllByRole("listitem");

        expect(eventListItems.length).toBe(32);
      });
    });
  });

  test("The user will change the number of events being displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user has opened the app,", () => {
      AppComponent = render(<App />);
    });

    let AppDOM;
    let numberOfEvents;
    let input;
    when("they change the number of events being displayed", async () => {
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      numberOfEvents = AppDOM.querySelector("#number-of-events");
      input = within(numberOfEvents).queryByRole("textbox");

      await user.type(input, "{backspace}{backspace}10");
    });

    then("the selected number of events will be displayed", () => {
      AppDOM = AppComponent.container.firstChild;
      numberOfEvents = AppDOM.querySelector("#number-of-events");
      input = within(numberOfEvents).queryByRole("textbox");

      expect(input.value).toEqual("10");
    });
  });
});
