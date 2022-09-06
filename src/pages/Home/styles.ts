import styled from "styled-components";
import image from "../../assets/imagesWeathers/clearSkySun.webp";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 6rem;
`;

export const BoxCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background: var(--purple-300);
  padding: 3rem;
`;

export const InfoWeather = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  height: 50%;
  padding: 4rem 6rem;
  border-radius: 40px;
  background-image: url(${image});
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;
export const LocalDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
export const Local = styled.span`
  font-size: 2rem;
`;
export const Date = styled.span`
  font-size: 1.2rem;
`;

export const BoxWeather = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 100px;
    height: 100px;
  }
`;
export const Weather = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
export const Dregrees = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
export const NameWeather = styled.span`
  font-size: 1.2rem;
`;

export const Weathers = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--gray-300);
`;
export const WeatherForecast = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;
export const Weath = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: var(--white-200);
  color: var(--gray-300);
  border-radius: 10px;

  svg {
    fill: var(--gray-300);
    width: 80px;
    height: 80px;
  }
`;
export const DayOfWeek = styled.span``;
export const WeatherName = styled.span``;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
export const ButtonCurrentLocation = styled.button`
  width: 200px;
  height: 40px;
  background: var(--gray-300);
  border: none;
  color: var(--white-100);
  font-weight: bold;
`;
export const ButtonRefresh = styled.button`
  width: 200px;
  height: 40px;
  background: none;
  border: 1px solid var(--gray-300);
  color: var(--gray-300);
  font-weight: bold;
`;
