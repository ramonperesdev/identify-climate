import { render, screen, fireEvent } from "@testing-library/react";
import { SwitchToggleTheme } from ".";
import { darkTheme } from "../../styles/themes";

jest.mock("../IconWeather");
jest.mock("../../utils/getTheme.ts", () => {
  return () => darkTheme;
});

test("Switch Toggle renders correctly", () => {
  const { container } = render(
    <SwitchToggleTheme handleToogleTheme={() => {}} />
  );

  expect(container.firstChild).toHaveClass("switch");
  expect(container.getElementsByClassName("handle").length).toBe(1);
});

test("Button clicked correctly", () => {
  const mockFunction = jest.fn();

  render(<SwitchToggleTheme handleToogleTheme={mockFunction} />);

  fireEvent.click(screen.getByTestId("switch-container"));
  expect(mockFunction).toHaveBeenCalledTimes(1);
});

test("Change page theme", () => {
  render(<SwitchToggleTheme handleToogleTheme={() => {}} />);

  expect(screen.getByTestId("switch-container")).toHaveAttribute(
    "data-theme",
    "dark"
  );
});
