import { fireEvent, render, screen } from "@testing-library/react";
import Button, { ButtonTheme } from "./Button";

describe("Testing a button", () => {
  test("with empty params", () => {
    const value = "ТЕКСТ";
    const testingElement = <Button>{value}</Button>;
    render(testingElement);
    expect(screen.getByText(value)).toBeInTheDocument();
  });

  test("with add theme", () => {
    const value = "Test";
    const testingElement = (
      <Button theme={ButtonTheme.BACKGROUND}>{value}</Button>
    );
    render(testingElement);
    expect(screen.getByText(value)).toHaveClass("background");
  });

  test("with add theme & added children prop", () => {
    const value = "myTest";
    const testingElement = (
      <Button theme={ButtonTheme.CLEAR} children={value} />
    );
    render(testingElement);
    expect(screen.getByText(value)).toHaveClass("clear");
  });

  test("accessibility test with attributes", () => {
    const value = "myTest";
    const testingElement = (
      <Button aria-label="aria-test" aria-atomic={true}>
        {value}
      </Button>
    );
    render(testingElement);
    expect(screen.getByText(value)).toHaveAttribute("aria-label");
  });

  test("сalls onClick prop when clicked", () => {
    const value = "myTest";
    const handleClick = jest.fn();
    const testingElement = <Button onClick={handleClick}>{value}</Button>;
    render(testingElement);
    fireEvent.click(screen.getByText(value));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
