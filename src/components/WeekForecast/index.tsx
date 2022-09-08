import React, { useCallback, useEffect, useMemo } from "react";

import { ReactComponent as ClearSky } from "../../assets/iconsWeathers/01d.svg";
import { IconWeather } from "../IconWeather/IconWeather";

import { Weath, WeatherName, DayOfWeek } from "./styles";

interface IWeather {
  weath: { description: string; date: Date; icon: string; temp: number };
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
