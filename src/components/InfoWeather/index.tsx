// ASSETS
import { ReactComponent as ClearSkyWhite } from "../../assets/clearDayWhite.svg";

// COMPONENTS
import { SwitchToggleTheme } from "../SwitchToggle";

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
import { IWeather } from "../../@types/types";
import { IconWeather } from "../IconWeather";
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
        <IconWeather type={dataWeather?.icon} />
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
