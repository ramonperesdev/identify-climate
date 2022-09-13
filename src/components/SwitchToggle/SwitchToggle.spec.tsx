import { render, screen, fireEvent } from "@testing-library/react";
import { SwitchToggleTheme } from ".";

jest.mock("../IconWeather");

// jest.mock("react", () => ({
//   useState: (initial: any) => [initial, jest.fn()],
// }));

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

// test("Change page theme", () => {
//   const [_, setState] = useState(false);

//   const { rerender } = render(
//     <SwitchToggleTheme handleToogleTheme={() => {}} />
//   );

//   expect(screen.getByTestId("switch-container")).toHaveStyle(
//     `background-color: '#33363B'`
//   );

//   fireEvent.click(screen.getByTestId("switch-container"));
//   rerender(<SwitchToggleTheme handleToogleTheme={() => {}} />);

//   expect(screen.getByTestId("switch-container")).toHaveStyle(
//     `background-color: '#33363B'`
//   );
// });
