import { useMemo } from "react";

// COMPONENTS
import { IconWeather } from "../IconWeather";

// STYLES
import { Weath, WeatherName, DayOfWeek } from "./styles";

// TYPES
import { IWeatherTypes } from "../../@types/types";
interface IWeather {
  weath: {
    /**
     * @description Variable responsible for provide a description of the weather
     */
    description: string;

    /**
     * @description Variable responsible for provide a date of the weather
     */
    date: Date;

    /**
     * @description Variable responsible for provide a icon of the weather
     */
    icon: keyof IWeatherTypes;

    /**
     * @description Variable responsible for provide a temperature of the weather
     */
    temp: number;
  };
}

export function WeekForecast({ weath }: IWeather) {
  const daysOfWeek = useMemo(
    () => ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    []
  );

  return (
    <Weath>
      <IconWeather type={weath.icon} />
      <WeatherName>{weath.description.toUpperCase()}</WeatherName>
      <DayOfWeek>{`${daysOfWeek[weath.date.getDay()]}, ${String(
        weath.date.getHours()
      ).padStart(2, "0")}:${String(weath.date.getMinutes()).padStart(
        2,
        "0"
      )}`}</DayOfWeek>
    </Weath>
  );
}
