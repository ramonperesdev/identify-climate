import { useCallback, useEffect, useRef, useState } from "react";

// SERVICES
import {
  getLocationWeather,
  getWeatherForecast,
} from "../../services/endpoints/weather";
import { CancelTokenSource } from "axios";

// TYPES
import { ICoords, IWeather } from "../../@types/types";

// COMPONENTS
import { InfoWeather } from "../../components/InfoWeather";
import { WeekForecast } from "../../components/WeekForecast";
import { Skeleton } from "../../components/Skeleton";
import { Tooltip } from "../../components/Tooltip";

// ASSETS
import { MdMyLocation } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";

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
  /**
   * @description Function responsible for changing the theme
   */
  handleToogleTheme: () => void;
}

export function Home({ handleToogleTheme }: IHomeProps) {
  console.log("test remount");

  const [loading, setLoading] = useState(true);
  const [loadingHoursForecast, setLoadingHoursForecast] = useState(true);
  const [coords, setCoords] = useState<ICoords | undefined>(undefined);
  const [error, setError] = useState(false);

  /**
   * @description
   * States responsible for saving all weather data provided by the API
   */
  const [hoursForecast, setHoursForecast] = useState([]);
  const [dataWeather, setDataWeather] = useState<IWeather | undefined>(
    undefined
  );

  /**
   * @description
   * Token of the current API call, with this reference it is possible to cancel the respective call that is occurring
   */
  const getWeatherSource = useRef<CancelTokenSource>();
  const getCurrentWeatherSource = useRef<CancelTokenSource>();

  const messagesTooltip = {
    accepted:
      "Your location has already been authorized and the weather in your region is processed.",
    refused:
      "Without your location we cannot provide you with the climate of your region.",
    unsolicited:
      "Please provide your location for us to provide you with the weather and forecast for your region.",
  };

  /**
   * @description
   * - Responsible for defining which text should be presented
   * in the tooltip based on the values ​​of the states.
   */
  const handleTextTooltip = useCallback(() => {
    if (coords) {
      return messagesTooltip["accepted"];
    } else if (!error) {
      return messagesTooltip["unsolicited"];
    } else {
      return messagesTooltip["refused"];
    }
  }, [coords, error]);

  /**
   * @description
   * - Responsible for communicating with the API and bringing the weather
   * of the region based on the latitude and longitude provided by the use.
   */
  const handleSetWeather = useCallback(
    async (latitude?: number, longitude?: number) => {
      getWeatherSource.current?.cancel?.("Request Canceled");
      const { apiCall, source } = getLocationWeather();
      getWeatherSource.current = source;

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

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [coords]
  );

  /**
   * @description
   * - Responsible for communicating with the API and bringing the
   * weather forecast based on the location provided by the user.
   */
  const handleSetHoursForecast = useCallback(
    async (latitude?: number, longitude?: number) => {
      getCurrentWeatherSource.current?.cancel?.("Request Canceled");
      const { apiCall, source } = getWeatherForecast();
      getCurrentWeatherSource.current = source;

      try {
        setLoadingHoursForecast(true);

        const { data } = await apiCall({
          latitude: latitude || -22.9068,
          longitude: longitude || -43.1729,
        });

        setHoursForecast(
          data.list.map((i: any) => ({
            temp: i.main.temp,
            date: new Date(i.dt_txt),
            description: i.weather[0].description,
            icon: i.weather[0].icon,
          }))
        );

        setLoadingHoursForecast(false);
      } catch (error) {
        setLoadingHoursForecast(false);
        console.log(error);
      }
    },
    []
  );

  /**
   * @description
   * - Responsible for requesting user authorization to obtain
   * your latitude and longitude.
   */
  const handleGetLocation = useCallback(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          handleSetWeather(latitude, longitude);
          handleSetHoursForecast(latitude, longitude);
          setCoords({ latitude, longitude });
          setError(false);
        },
        () => setError(true)
      );
    }
  }, []);

  useEffect(() => {
    handleSetWeather();
    handleSetHoursForecast();

    return () => {
      getWeatherSource.current?.cancel?.("Request Canceled");
      getCurrentWeatherSource.current?.cancel?.("Request Canceled");
    };
  }, []);

  return (
    <Container>
      <BoxCenter>
        {(loading || loadingHoursForecast) && (
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
                    <MdMyLocation />
                    Current Location
                  </ButtonCurrentLocation>
                </Tooltip>
                <Tooltip textContent="Use this option to update the weather for your location">
                  <ButtonRefresh
                    type="button"
                    onClick={() => {
                      handleSetWeather(coords?.latitude, coords?.longitude);
                      handleSetHoursForecast(
                        (coords?.latitude, coords?.longitude)
                      );
                    }}
                  >
                    <BiRefresh />
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
