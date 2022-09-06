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
} from "./styles";

export function Home() {
  const [coords, setCoords] = useState<ICoords | undefined>(undefined);
  const [error, setError] = useState(false);

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
        <Weathers>test</Weathers>
        {/* <button type="button" onClick={handleSetWeather}>
          test
        </button> */}
      </BoxCenter>
    </Container>
  );
}
