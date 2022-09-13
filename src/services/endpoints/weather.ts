// SERVICES
import api from "../api";

// TYPES
import { ICoords } from "../../@types/types";

export function getLocationWeather() {
  function apiCall({ latitude, longitude }: ICoords) {
    return api.get(
      `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1251c9461659318c33e6828a82bdca9c&units=metric`
    );
  }

  return { apiCall };
}

export function getWeatherForecast() {
  function apiCall({ latitude, longitude }: ICoords) {
    return api.get(
      `/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=1251c9461659318c33e6828a82bdca9c&units=metric&cnt=6`
    );
  }

  return { apiCall };
}
