import axios from 'axios';
import { Config } from '../Config';
import { ResponseIcons } from '../utils/Helpers';

export type WeatherApiResponse = {
  weather: {
    main: string;
    description: string;
    icon: ResponseIcons;
  }[];
  main: {
    temp: number;
  };
  name: string;
};

export const WeatherApiService = axios.create({
  baseURL: Config.weatherApiUrl,
});
