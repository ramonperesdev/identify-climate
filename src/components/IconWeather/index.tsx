// ASSETS
import {
  BrokenClouds,
  ClearSkyDay,
  ClearSkyNight,
  FewCloudsDay,
  FewCloudsNight,
  Mist,
  RainDay,
  RainNight,
  ScatteredClouds,
  ShowerRain,
  SnowDay,
  SnowNight,
  Thunderstorm,
} from "../../assets";

// TYPES
import { IWeatherTypes } from "../../@types/types";
interface IIconProps {
  /**
   * @description Name of the icon that will be rendered according to each weather
   */
  type?: keyof IWeatherTypes;
}

export function IconWeather({ type = "01d", ...rest }: IIconProps) {
  const typesIcons = {
    //* ICONS WEATHER
    "01d": ClearSkyDay,
    "01n": ClearSkyNight,
    "02d": FewCloudsDay,
    "02n": FewCloudsNight,
    "03d": ScatteredClouds,
    "03n": ScatteredClouds,
    "04d": BrokenClouds,
    "04n": BrokenClouds,
    "09d": ShowerRain,
    "09n": ShowerRain,
    "10d": RainDay,
    "10n": RainNight,
    "11d": Thunderstorm,
    "11n": Thunderstorm,
    "13d": SnowDay,
    "13n": SnowNight,
    "50d": Mist,
    "50n": Mist,
  };

  const ReactIcon = typesIcons[type];

  return (
    <ReactIcon
      height="80"
      width="80"
      className={type}
      data-testid={type}
      {...rest}
    />
  );
}
