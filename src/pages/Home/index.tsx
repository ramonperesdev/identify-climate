import React, { useCallback, useEffect, useState } from "react";
import { ICoords } from "../../interfaces/weather";
import { getLocationWeather } from "../../services/endpoints/weather";

import { ReactComponent as ClearSky } from "../../assets/clear-day.svg";

import {
  Container,
  BoxCenter,
  InfoWeather,
  LocalDate,
  Local,
  Date,
  BoxWeather,
  Weather,
  Dregrees,
  NameWeather,
  Weathers,
  Title,
  WeatherForecast,
  Weath,
  WeatherName,
  DayOfWeek,
  BoxButtons,
  ButtonCurrentLocation,
  ButtonRefresh,
} from "./styles";

export function Home() {
  const [coords, setCoords] = useState<ICoords | undefined>(undefined);
  const [error, setError] = useState(false);

  const weathers = [
    { id: 1, weather: "Moderate Rain", day: "SUN" },
    { id: 2, weather: "Light Rain", day: "MON" },
    { id: 3, weather: "Moderate Rain", day: "TUE" },
    { id: 4, weather: "Thunderstorms", day: "WED" },
    { id: 5, weather: "Scattered Clouds", day: "THU" },
    { id: 6, weather: "Clear Sky", day: "FRI" },
  ];

  const handleSetLocation = useCallback(
    (latitude: number, longitude: number) => {
      if (!latitude || !longitude) {
        return;
      }

      setCoords({ latitude: latitude, longitude: longitude });
      console.log("passou");
    },
    []
  );

  const handleSetWeather = useCallback(async () => {
    const { apiCall } = getLocationWeather();

    try {
      const response = await apiCall({
        latitude: coords?.latitude,
        longitude: coords?.longitude,
      });

      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  }, [coords]);

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoords({ latitude: latitude, longitude: longitude });
        },
        () => setError(true)
      );
    }
  }, []);

  useEffect(() => {
    console.log("error", error);
  }, [error]);
  useEffect(() => {
    console.log("coords", coords);
  }, [coords]);

  return (
    <Container>
      <BoxCenter>
        <InfoWeather>
          <LocalDate>
            <Local>Goiânia</Local>
            <Date>Monday, September 05 at 15:00PM</Date>
          </LocalDate>

          <BoxWeather>
            <ClearSky />
            <Weather>
              <Dregrees>29°</Dregrees>
              <NameWeather>Clear Sky</NameWeather>
            </Weather>
          </BoxWeather>
        </InfoWeather>
        <Weathers>
          <Title>Daily forecast</Title>
          <WeatherForecast>
            {weathers.map((item) => (
              <Weath>
                <ClearSky />
                <WeatherName>{item.weather}</WeatherName>
                <DayOfWeek>{item.day}</DayOfWeek>
              </Weath>
            ))}
          </WeatherForecast>
          <BoxButtons>
            <ButtonCurrentLocation type="button" onClick={handleSetWeather}>
              Current Location
            </ButtonCurrentLocation>
            <ButtonRefresh type="button" onClick={handleSetWeather}>
              Refresh
            </ButtonRefresh>
          </BoxButtons>
        </Weathers>
      </BoxCenter>
    </Container>
  );
}
