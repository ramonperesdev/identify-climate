import React from "react";

import { ReactComponent as ClearSky } from "../../assets/clearDay.svg";

import { Weath, WeatherName, DayOfWeek } from "./styles";

interface IWeather {
  weath: { id: number; weather: string; day: string };
}

export function WeekForecast({ weath }: IWeather) {
  return (
    <Weath>
      <ClearSky />
      <WeatherName>{weath.weather}</WeatherName>
      <DayOfWeek>{weath.day}</DayOfWeek>
    </Weath>
  );
}
