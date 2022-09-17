import styled from 'styled-components';

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
  /* background: var(--gray-300); */
  background: ${({ theme }) => theme.content};
`;

export const BoxWeathers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 40%;
`;

export const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
`;
export const Weathers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  overflow-y: auto;

  @media (min-width: 1400px) {
    grid-template-columns: repeat(6, 1fr);
  }
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

  -webkit-box-shadow: 0px 0px 22px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 22px 3px rgba(0, 0, 0, 0.3);
  color: #fff;
  background: ${({ theme }) => theme.buttonColor};
  font-weight: bold;
  border-radius: 5px;

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
`;
export const ButtonRefresh = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 200px;
  height: 45px;

  -webkit-box-shadow: 0px 0px 22px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 22px 3px rgba(0, 0, 0, 0.3);
  background: ${({ theme }) => theme.buttonRefreshColor};
  color: #3c3c3c;
  font-weight: bold;
  border-radius: 5px;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--gray-500);
  }
`;
