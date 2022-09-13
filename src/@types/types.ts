export interface IWeatherTypes {
  "01d": string;
  "01n": string;
  "02d": string;
  "02n": string;
  "03d": string;
  "03n": string;
  "04d": string;
  "04n": string;
  "09d": string;
  "09n": string;
  "10d": string;
  "10n": string;
  "11d": string;
  "11n": string;
  "13d": string;
  "13n": string;
  "50d": string;
  "50n": string;
}

export interface ICoords {
  latitude?: number;
  longitude?: number;
}

export interface IWeather {
  temp: number;
  location: string;
  description: string;
  main: string;
  icon: keyof IWeatherTypes;
  date: string;
}
