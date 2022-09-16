// SERVICES
import { api, CancelToken } from "../api";

// TYPES
import { ICoords } from "../../@types/types";

export function getLocationWeather() {
  const source = CancelToken.source();

  function apiCall({ latitude, longitude }: ICoords) {
    return api.get(
      `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`,
      {
        cancelToken: source.token,
      }
    );
  }

  return { apiCall, source };
}

export function getWeatherForecast() {
  const source = CancelToken.source();

  function apiCall({ latitude, longitude }: ICoords) {
    return api.get(
      `/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric&cnt=6`,
      {
        cancelToken: source.token,
      }
    );
  }

  return { apiCall, source };
}
