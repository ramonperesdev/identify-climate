import React, { useCallback, useEffect, useState } from "react";
import { ICoords, IWeather } from "../../interfaces/weather";
import { getLocationWeather } from "../../services/endpoints/weather";

import { ReactComponent as ClearSkyWhite } from "../../assets/clearDayWhite.svg";
import { ReactComponent as ClearSky } from "../../assets/clearDay.svg";
import { ReactComponent as IconRefresh } from "../../assets/iconRefresh.svg";
import { ReactComponent as IconLocation } from "../../assets/iconLocation.svg";

import {
  Container,
  BoxCenter,
  BoxWeathers,
  Title,
  Weathers,
  BoxButtons,
  ButtonCurrentLocation,
  ButtonRefresh,
  Skeleton,
} from "./styles";
import { InfoWeather } from "../../components/InfoWeather";
import { WeekForecast } from "../../components/WeekForecast";

export function Home() {
  const [coords, setCoords] = useState<ICoords | undefined>(undefined);
  const [dataWeather, setDataWeather] = useState<IWeather | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const weathers = [
    { id: 1, weather: "Moderate Rain", day: "SUN" },
    { id: 2, weather: "Light Rain", day: "MON" },
    { id: 3, weather: "Moderate Rain", day: "TUE" },
    { id: 4, weather: "Thunderstorms", day: "WED" },
    { id: 5, weather: "Scattered Clouds", day: "THU" },
    { id: 6, weather: "Clear Sky", day: "FRI" },
  ];

  const handleSetWeather = useCallback(async () => {
    console.log("entrou");
    const { apiCall } = getLocationWeather();

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      month: "long",
      day: "numeric",
    };

    // format date: Tuesday, September 6 at 6:28 PM
    const today = new Date().toLocaleDateString("en-US", options);

    try {
      setLoading(true);

      const { data } = await apiCall({
        latitude: coords?.latitude || -22.8742,
        longitude: coords?.longitude || -43.4685,
      });

      setDataWeather({
        temp: Math.round(data.main.temp),
        location: data.name,
        description: data.weather[0].description,
        main: data.weather[0].main,
        icon: data.weather[0].icon,
        date: today,
      });

      console.log("data", data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [coords]);

  useEffect(() => {
    // if (window.navigator.geolocation) {
    //   window.navigator.geolocation.getCurrentPosition(
    //     ({ coords: { latitude, longitude } }) => {
    //       setCoords({ latitude: latitude, longitude: longitude });
    //     },
    //     () => setError(true)
    //   );
    // }

    handleSetWeather();
  }, []);

  useEffect(() => {
    console.log("dataWeather", dataWeather);
  }, [dataWeather]);

  return (
    <Container>
      <BoxCenter>
        {loading && (
          <>
            <Skeleton height={60} />
            <Skeleton height={40} />
          </>
        )}

        {!loading && (
          <>
            <InfoWeather dataWeather={dataWeather} />

            <BoxWeathers>
              <Title>Hours forecast</Title>
              <Weathers>
                {weathers.map((item) => (
                  <WeekForecast weath={item} />
                ))}
              </Weathers>

              <BoxButtons>
                <ButtonCurrentLocation type="button" onClick={handleSetWeather}>
                  <IconLocation />
                  Current Location
                </ButtonCurrentLocation>
                <ButtonRefresh type="button" onClick={handleSetWeather}>
                  <IconRefresh />
                  Refresh
                </ButtonRefresh>
              </BoxButtons>
            </BoxWeathers>
          </>
        )}
      </BoxCenter>
    </Container>
  );
}
