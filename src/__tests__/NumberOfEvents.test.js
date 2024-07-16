import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> Component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test("renders number of events textbox", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  });

  test("number of events is 32 by default", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toHaveValue("32");
  });

  test("number of events changes to user input when typed in", async () => {
    const user = userEvent.setup();
    const input = NumberOfEventsComponent.queryByRole("textbox")
    await user.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue("10");
  });
});
