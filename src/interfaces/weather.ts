export interface ICoords {
  latitude?: number;
  longitude?: number;
}

export interface IWeather {
  temp: number;
  location: string;
  description: string;
  main: string;
  icon: string;
  date: string;
}
