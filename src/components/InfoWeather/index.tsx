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
} from "./styles";

// TYPES
import { IWeather } from "../../interfaces/weather";
interface IDataWeatherProps {
  dataWeather?: IWeather;
}

export function InfoWeather({ dataWeather }: IDataWeatherProps) {
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
    </Wrapper>
  );
}
