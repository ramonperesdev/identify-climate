// ASSETS
import { ReactComponent as ClearSkyDay } from "../../assets/iconsWeathers/01d.svg";
import { ReactComponent as ClearSkyNight } from "../../assets/iconsWeathers/01n.svg";
import { ReactComponent as FewCloudsDay } from "../../assets/iconsWeathers/02d.svg";
import { ReactComponent as FewCloudsNight } from "../../assets/iconsWeathers/02n.svg";
import { ReactComponent as ScatteredClouds } from "../../assets/iconsWeathers/03d.svg";
import { ReactComponent as BrokenClouds } from "../../assets/iconsWeathers/04d.svg";
import { ReactComponent as ShowerRain } from "../../assets/iconsWeathers/09d.svg";
import { ReactComponent as RainDay } from "../../assets/iconsWeathers/10d.svg";
import { ReactComponent as RainNight } from "../../assets/iconsWeathers/10n.svg";
import { ReactComponent as Thunderstorm } from "../../assets/iconsWeathers/11d.svg";
import { ReactComponent as SnowDay } from "../../assets/iconsWeathers/13d.svg";
import { ReactComponent as SnowNight } from "../../assets/iconsWeathers/13n.svg";
import { ReactComponent as Mist } from "../../assets/iconsWeathers/50d.svg";
import { IWeatherTypes } from "../../interfaces/weather";

// TYPES
interface IIconProps {
  type?: keyof IWeatherTypes;
}

export function IconWeather({ type = "01d", ...rest }: IIconProps) {
  const typesIcons = {
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

  return <ReactIcon height="80" width="80" {...rest} />;
}
