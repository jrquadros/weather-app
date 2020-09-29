export const CapitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const GetTempStatus = (temp: number) => (temp < 25 ? 'cold' : 'warm');

export const ResponseToIconMap = {
  '01d': 'weather-cloudy',
  '02d': 'weather-partly-cloudy',
  '03d': 'weather-cloudy',
  '04d': 'weather-cloudy',
  '09d': 'weather-partly-rainy',
  '10d': 'weather-rainy',
  '11d': 'weather-lightning-rainy',
  '13d': 'weather-snowy',
  '50d': 'weather-fog',
  '01n': 'WeatherNight',
  '02n': 'weather-partly-cloudy',
  '03n': 'weather-cloudy',
  '04n': 'weather-cloudy',
  '09n': 'weather-partly-rainy',
  '10n': 'weather-rainy',
  '11n': 'weather-lightning-rainy',
  '13n': 'weather-snowy',
  '50n': 'weather-fog',
};

export type ResponseIcons = keyof typeof ResponseToIconMap;
