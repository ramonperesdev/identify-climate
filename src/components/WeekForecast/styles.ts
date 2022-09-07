import styled from "styled-components";

export const Weath = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 1rem;

  background: var(--white-200);
  color: var(--gray-300);
  border-radius: 10px;

  svg {
    width: 80px;
    height: 80px;
    fill: var(--gray-300);
  }
`;
export const DayOfWeek = styled.span`
  font-size: 0.87rem;
  font-weight: bold;
`;
export const WeatherName = styled.span`
  font-weight: bold;
`;