import { screen } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import userEvent from "@testing-library/user-event";

const initialState = {
  counter: {
    value: 5,
  },
};

const user = userEvent.setup();

describe("Testing a Counter", () => {
  test("test on render Counter", () => {
    componentRender(<Counter />);
    expect(screen.getByTestId("value-title")).toBeInTheDocument();
  });

  test("increment", async () => {
    componentRender(<Counter />, { initialState });
    await user.click(screen.getByTestId("increment-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("6");
  });

  test("decrement", async () => {
    componentRender(<Counter />, { initialState });
    await user.click(screen.getByTestId("decrement-btn"));
    expect(screen.getByTestId("value-title")).toHaveTextContent("4");
  });
});
