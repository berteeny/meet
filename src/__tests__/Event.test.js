import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeAll(async () => {
    allEvents = await getEvents();
  });

  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test("renders event title", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test("renders event start time", () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });

  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test("renders event details button", () => {
    expect(EventComponent.queryByRole("button")).toBeInTheDocument();
  });

  test("event's details are hidden by default", () => {
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
  });

  test("event details are expanded and collapsed when user clicks 'show details' and 'hide details' button", async () => {
    const user = userEvent.setup();
    const detailsButton = EventComponent.queryByRole("button");
    await user.click(detailsButton, "Show details");
    expect(
      EventComponent.container.querySelector(".details")
    ).toBeInTheDocument();
    await user.click(detailsButton, "Hide details");
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
  });
});
