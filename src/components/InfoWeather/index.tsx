// COMPONENTS
import { SwitchToggleTheme } from '../SwitchToggle';

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
} from './styles';

// TYPES
import { IWeather } from '../../@types/types';
import { IconWeather } from '../IconWeather';
interface IDataWeatherProps {
  /**
   * @description Data that will be rendered referring to the weather
   */
  dataWeather?: IWeather;

  /**
   * @description Function responsible for changing the theme
   */
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
