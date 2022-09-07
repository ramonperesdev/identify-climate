import React from "react";

import { ReactComponent as ClearSky } from "../../assets/clearDay.svg";

import { Weath, WeatherName, DayOfWeek } from "./styles";

interface IWeather {
  weath: { description: string; date: string; icon: string; temp: number };
}

export function WeekForecast({ weath }: IWeather) {
  return (
    <Weath>
      <ClearSky />
      <WeatherName>{weath.description.toUpperCase()}</WeatherName>
      <DayOfWeek>TESTE</DayOfWeek>
    </Weath>
  );
}
