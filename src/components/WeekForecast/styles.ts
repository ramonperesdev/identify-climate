import styled from "styled-components";

export const Weath = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 22px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 22px 3px rgba(0, 0, 0, 0.3);

  background: var(--gray-500);
  color: var(--gray-300);
  border-radius: 10px;
  border: 1px solid var(--gray-700);

  svg {
    width: 80px;
    height: 80px;
  }
`;
export const DayOfWeek = styled.span`
  font-size: 0.87rem;
  font-weight: bold;
  color: var(--white-200);
`;
export const WeatherName = styled.span`
  font-weight: bold;
  color: var(--white-200);
`;
