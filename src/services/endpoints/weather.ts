// SERVICES
import api from "../api";

// TYPES
import { ICoords } from "../../interfaces/weather";

export function getLocationWeather() {
  function apiCall({ latitude, longitude }: ICoords) {
    return api.get(
      `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1251c9461659318c33e6828a82bdca9c&units=metric`
    );
  }

  return { apiCall };
}
