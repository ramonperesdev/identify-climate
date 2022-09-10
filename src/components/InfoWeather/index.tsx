// ASSETS
import { ReactComponent as ClearSkyWhite } from "../../assets/clearDayWhite.svg";

// STYLES
import {
  Wrapper,
  LocalDate,
  Local,
  Date,
  BoxWeather,
  Weather,
  Dregrees,
  NameWeather,
  BoxSwitchToggle,
} from "./styles";

// TYPES
import { IWeather } from "../../interfaces/weather";
import { SwitchToggleTheme } from "../SwitchToggle";
interface IDataWeatherProps {
  dataWeather?: IWeather;
  handleToogleTheme: () => void;
}

export function InfoWeather({
  dataWeather,
  handleToogleTheme,
}: IDataWeatherProps) {
  return (
    <Wrapper>
      <LocalDate>
        <Local>{dataWeather?.location}</Local>
        <Date>{dataWeather?.date}</Date>
      </LocalDate>

      <BoxWeather>
        <ClearSkyWhite />
        <Weather>
          <Dregrees>{`${dataWeather?.temp}°`}</Dregrees>
          <NameWeather>{dataWeather?.description.toUpperCase()}</NameWeather>
        </Weather>
      </BoxWeather>

      <BoxSwitchToggle>
        <SwitchToggleTheme handleToogleTheme={handleToogleTheme} />
      </BoxSwitchToggle>
    </Wrapper>
  );
}
