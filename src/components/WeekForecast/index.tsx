import { useCallback, useEffect, useMemo } from "react";

// COMPONENTS
import { IconWeather } from "../IconWeather";

// STYLES
import { Weath, WeatherName, DayOfWeek } from "./styles";

// TYPES
import { IWeatherTypes } from "../../@types/types";
interface IWeather {
  weath: {
    description: string;
    date: Date;
    icon: keyof IWeatherTypes;
    temp: number;
  };
}

export function WeekForecast({ weath }: IWeather) {
  const daysOfWeek = useMemo(
    () => ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    []
  );

  const handleDayOfWeek = useCallback(() => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
    };

    // format date: Tue 6:28 PM
    const today = weath.date.toLocaleDateString("en-US", options);

    console.log("today", today);
  }, []);

  useEffect(() => {
    handleDayOfWeek();
  }, []);

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
