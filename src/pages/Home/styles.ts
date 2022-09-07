import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
  to{
      background-position-x: -200%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 6rem;
`;

export const BoxCenter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
  width: 100%;
  height: 100%;

  border-radius: 40px;
  background: var(--purple-300);
`;

export const BoxWeathers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 40%;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--gray-300);
`;
export const Weathers = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
  gap: 0.3rem;

  svg {
    fill: var(--gray-300);
    width: 80px;
    height: 80px;
  }
`;
export const DayOfWeek = styled.span`
  font-size: 0.87rem;
  font-weight: bold;
`;
export const WeatherName = styled.span``;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
export const ButtonCurrentLocation = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 200px;
  height: 45px;

  background: var(--gray-300);
  color: var(--white-100);
  font-weight: bold;
  border-radius: 5px;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--white-100);
  }
`;
export const ButtonRefresh = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 200px;
  height: 45px;

  background: var(--white-100);
  color: var(--gray-300);
  font-weight: bold;
  border-radius: 5px;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--gray-300);
  }
`;

interface ISkeletonProps {
  height?: number;
}

export const Skeleton = styled.div<ISkeletonProps>`
  height: ${(props) => props.height && `${props.height}%`};
  border-radius: 40px;
  background: var(--white-100);
  background: linear-gradient(110deg, #cfcfcf 8%, #f7f6f6 18%, #cfcfcf 33%);
  background-size: 200% 100%;
  animation: 1.5s ${skeleton} linear infinite;
`;