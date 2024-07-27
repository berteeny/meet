import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("User has opened the app, event details are collapsed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user is viewing the list of events,", () => {
      AppComponent = render(<App />);
    });

    let AppDOM;
    when("the app is opened", async () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const eventListItems = within(EventListDOM).queryAllByRole("listitem");

        expect(eventListItems.length).toBe(32);
      });
    });

    then("the events will display as collapsed by default", () => {
      const eventDetails = AppDOM.querySelector(".details");

      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test("Event details will expand when show details button is clicked", ({
    given,
    when,
    then,
  }) => {
    let EventComponent;
    let allEvents;
    let eventDetails;
    given("the user has not clicked an event,", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      eventDetails = EventComponent.container.querySelector(".details");

      expect(eventDetails).not.toBeInTheDocument();
    });

    when("the user clicks on an event details button", async () => {
      const user = userEvent.setup();
      const detailsButton = EventComponent.queryByText("Show details");

      await user.click(detailsButton);
    });

    then("then event details will be expanded to show details", () => {
      eventDetails = EventComponent.container.querySelector(".details");

      expect(eventDetails).toBeInTheDocument();
    });
  });

  test("Event details will collapse when hide details button is clicked", ({
    given,
    when,
    then,
  }) => {
    let EventComponent;
    let allEvents;
    let eventDetails;
    given("the user has expanded an event,", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      const detailsButton = EventComponent.queryByText("Show details");

      await user.click(detailsButton);

      eventDetails = EventComponent.container.querySelector(".details");

      expect(eventDetails).toBeInTheDocument();
    });

    when("they click the close button", async () => {
      const user = userEvent.setup();
      const detailsButton = EventComponent.queryByText("Hide details");

      await user.click(detailsButton);
    });

    then("the event will collapse and hide event details", () => {
      eventDetails = EventComponent.container.querySelector(".details");

      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
