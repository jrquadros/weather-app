import { WeatherActions } from '../actions/WeatherActions';
import { Weather } from '../../entities/Weather';

export enum WeatherStateEnum {
  'INIT',
  'LOADING',
  'LOADED',
  'ERROR',
}

export interface WeatherState {
  state: 'INIT' | 'LOADING' | 'LOADED' | 'ERROR';
  weatherData: Weather | null;
  errorMessage?: string;
}

export const defaultWeatherState: WeatherState = {
  state: 'INIT',
  weatherData: null,
};

export const WeatherReducer = (
  state: WeatherState = defaultWeatherState,
  action: WeatherActions
): WeatherState => {
  switch (action.type) {
    case 'WEATHER_FETCH':
      return {
        ...state,
        state: 'LOADING',
        weatherData: null,
      };
    case 'WEATHER_FETCH_SUCCESS':
      return {
        ...state,
        state: 'LOADED',
        weatherData: action.weather,
      };
    case 'WEATHER_FETCH_ERROR':
      return {
        ...state,
        state: 'ERROR',
        weatherData: null,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
