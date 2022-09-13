import { render } from "@testing-library/react";
import { WeekForecast } from ".";

test("week forecast renders correctly", () => {
  const { debug } = render(
    <WeekForecast
      weath={{
        description: "overcast clouds",
        date: new Date(),
        icon: "01d",
        temp: 20,
      }}
    />
  );

  debug();
});
