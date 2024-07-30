import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}} />
    );
  });

  test("renders number of events textbox", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  });

  test("number of events is 32 by default", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toHaveValue("32");
  });

  test("number of events changes to user input when typed in", async () => {
    const user = userEvent.setup();
    const input = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue("10");
  });
});

describe("<NumberOfEvents /> integration", () => {
  test("number of events rendered matches the number of events inputted by the user", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
    const numberTextBox = within(NumberOfEventsDOM).queryByRole("textbox");

    await user.type(numberTextBox, "{backspace}{backspace}10");

    const EventListDOM = AppDOM.querySelector("#event-list");
    const EventListItems = within(EventListDOM).queryAllByRole("listitem");
    expect(EventListItems.length).toBe(10);
  });
});
