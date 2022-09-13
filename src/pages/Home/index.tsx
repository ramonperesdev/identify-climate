import { useCallback, useEffect, useState } from "react";

// SERVICES
import {
  getLocationWeather,
  getWeatherForecast,
} from "../../services/endpoints/weather";

// TYPES
import { ICoords, IWeather } from "../../interfaces/weather";

// COMPONENTS
import { InfoWeather } from "../../components/InfoWeather";
import { WeekForecast } from "../../components/WeekForecast";
import { Skeleton } from "../../components/Skeleton";
import { Tooltip } from "../../components/Tooltip";

// ASSETS
import { ReactComponent as IconRefresh } from "../../assets/iconRefresh.svg";
import { ReactComponent as IconLocation } from "../../assets/iconLocation.svg";

// STYLES
import {
  Container,
  BoxCenter,
  BoxWeathers,
  Title,
  Weathers,
  BoxButtons,
  ButtonCurrentLocation,
  ButtonRefresh,
} from "./styles";

interface IHomeProps {
  handleToogleTheme: () => void;
}

export function Home({ handleToogleTheme }: IHomeProps) {
  const [coords, setCoords] = useState<ICoords | undefined>(undefined);
  const [dataWeather, setDataWeather] = useState<IWeather | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [hoursForecast, setHoursForecast] = useState([]);
  const [error, setError] = useState(false);

  const messagesTooltip = {
    accepted:
      "Your location has already been authorized and the weather in your region is processed.",
    refused:
      "Without your location we cannot provide you with the climate of your region.",
    unsolicited:
      "Please provide your location for us to provide you with the weather and forecast for your region.",
  };

  const handleTextTooltip = useCallback(() => {
    if (coords) {
      return messagesTooltip["accepted"];
    } else if (!error) {
      return messagesTooltip["unsolicited"];
    } else {
      return messagesTooltip["refused"];
    }
  }, [coords, error]);

  const handleSetWeather = useCallback(
    async (latitude?: number, longitude?: number) => {
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
          latitude: latitude || -22.9068,
          longitude: longitude || -43.1729,
        });

        setDataWeather({
          temp: Math.round(data.main.temp),
          location: data.name,
          description: data.weather[0].description,
          main: data.weather[0].main,
          icon: data.weather[0].icon,
          date: today,
        });

        console.log("response weather", data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [coords]
  );

  const handleSetHoursForecast = useCallback(async () => {
    const { apiCall } = getWeatherForecast();

    try {
      const { data } = await apiCall({
        latitude: coords?.latitude || -16.6926655,
        longitude: coords?.longitude || -49.2942931,
      });

      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
      };

      // format date: Tuesday, September 6 at 6:28 PM
      const today = new Date(data.dt_txt).toLocaleDateString("en-US", options);

      console.log("today", today);

      setHoursForecast(
        data.list.map((i: any) => ({
          temp: i.main.temp,
          date: new Date(i.dt_txt),
          description: i.weather[0].description,
          icon: i.weather[0].icon,
        }))
      );

      console.log("response forecast", data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleGetLocation = useCallback(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          handleSetWeather(latitude, longitude);
          setCoords({ latitude, longitude });
        },
        () => setError(true)
      );
    }
  }, []);

  useEffect(() => {
    handleSetWeather();
    handleSetHoursForecast();
  }, []);

  return (
    <Container>
      <BoxCenter>
        {loading && (
          <>
            <Skeleton />
          </>
        )}

        {!loading && (
          <>
            <InfoWeather
              dataWeather={dataWeather}
              handleToogleTheme={handleToogleTheme}
            />

            <BoxWeathers>
              <Title>Hours forecast</Title>
              <Weathers>
                {hoursForecast.map((item) => (
                  <WeekForecast weath={item} />
                ))}
              </Weathers>

              <BoxButtons>
                <Tooltip textContent={handleTextTooltip()}>
                  <ButtonCurrentLocation
                    type="button"
                    onClick={handleGetLocation}
                  >
                    <IconLocation />
                    Current Location
                  </ButtonCurrentLocation>
                </Tooltip>
                <Tooltip textContent="Use this option to update the weather for your location">
                  <ButtonRefresh
                    type="button"
                    onClick={() =>
                      handleSetWeather(coords?.latitude, coords?.longitude)
                    }
                  >
                    <IconRefresh />
                    Refresh
                  </ButtonRefresh>
                </Tooltip>
              </BoxButtons>
            </BoxWeathers>
          </>
        )}
      </BoxCenter>
    </Container>
  );
}
