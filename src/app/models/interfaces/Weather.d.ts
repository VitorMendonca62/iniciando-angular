interface Coords {
  lon: number;
  lat: number;
}

interface WeatherMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Wind {
  speed: number;
  deg: number;
}

interface WeatherData {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coords;
  dt: number;
  id: number;
  main: WeatherMain;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Weather;
  wind: Wind;
}
