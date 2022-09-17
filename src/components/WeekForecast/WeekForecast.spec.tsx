import { render, screen } from '@testing-library/react';
import { WeekForecast } from '.';

jest.mock('../IconWeather');

test('Week forecast renders correctly', () => {
  const { rerender } = render(
    <WeekForecast
      weath={{
        description: 'broken clouds',
        date: new Date(2022, 9, 15),
        icon: '01d',
        temp: 23,
      }}
    />
  );

  expect(screen.getByText('BROKEN CLOUDS')).toBeInTheDocument();
  expect(screen.getByText('SAT, 00:00')).toBeInTheDocument();

  rerender(
    <WeekForecast
      weath={{
        description: 'clear sky',
        date: new Date(2022, 9, 14),
        icon: '01d',
        temp: 23,
      }}
    />
  );

  expect(screen.getByText('CLEAR SKY')).toBeInTheDocument();
  expect(screen.getByText('FRI, 00:00')).toBeInTheDocument();

  expect(screen.queryByText('BROKEN CLOUDS')).not.toBeInTheDocument();
  expect(screen.queryByText('SAT, 00:00')).not.toBeInTheDocument();
});
