import styled from "styled-components";

export const Weath = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, 0.5);

  background: ${({ theme }) => theme.backgroundCard};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};

  svg {
    width: 80px;
    height: 80px;
  }
`;
export const DayOfWeek = styled.span`
  font-size: 0.87rem;
  font-weight: bold;
`;
export const WeatherName = styled.span`
  font-weight: bold;
`;
