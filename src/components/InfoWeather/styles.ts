import styled from "styled-components";
import image from "../../assets/imagesWeathers/clearSkySun.webp";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem 6rem;
  width: 100%;
  height: 60%;

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
