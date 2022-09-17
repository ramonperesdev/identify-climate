import { render, screen } from '@testing-library/react';
import { InfoWeather } from '.';

jest.mock('../IconWeather');

test('Info Weather renders correctly', () => {
  const { rerender } = render(
    <InfoWeather
      dataWeather={{
        temp: 26,
        location: 'Rio de Janeiro',
        description: 'broken clouds',
        icon: '04d',
        main: 'Clouds',
        date: 'Tuesday, September 13 at 4:14 PM',
      }}
      handleToogleTheme={() => {}}
    />
  );

  expect(screen.getByText('26°')).toBeInTheDocument();
  expect(screen.getByText('Rio de Janeiro')).toBeInTheDocument();
  expect(screen.getByText('BROKEN CLOUDS')).toBeInTheDocument();
  expect(
    screen.getByText('Tuesday, September 13 at 4:14 PM')
  ).toBeInTheDocument();

  rerender(
    <InfoWeather
      dataWeather={{
        temp: 22,
        location: 'Goiania',
        description: 'clear sky',
        icon: '01d',
        main: 'Clear Sky',
        date: 'Monday, September 14 at 5:30 PM',
      }}
      handleToogleTheme={() => {}}
    />
  );

  expect(screen.getByText('22°')).toBeInTheDocument();
  expect(screen.getByText('Goiania')).toBeInTheDocument();
  expect(screen.getByText('CLEAR SKY')).toBeInTheDocument();
  expect(
    screen.getByText('Monday, September 14 at 5:30 PM')
  ).toBeInTheDocument();

  expect(screen.queryByText('26°')).not.toBeInTheDocument();
  expect(screen.queryByText('Rio de Janeiro')).not.toBeInTheDocument();
  expect(screen.queryByText('BROKEN CLOUDS')).not.toBeInTheDocument();
  expect(
    screen.queryByText('Tuesday, September 13 at 4:14 PM')
  ).not.toBeInTheDocument();
});
