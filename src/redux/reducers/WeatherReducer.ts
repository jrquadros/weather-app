import { WeatherActions } from '../actions/WeatherActions'
import { Weather } from '../../entities/Weather'

export enum WeatherStateEnum {
  'INIT',
  'LOADING',
  'LOADED',
  'ERROR',
}

export interface WeatherState {
  state: WeatherStateEnum
  weatherData: Weather | null
  errorMessage?: string
}

export const defaultWeatherState: WeatherState = {
  state: WeatherStateEnum.INIT,
  weatherData: null,
}

export const WeatherReducer = (
  state: WeatherState = defaultWeatherState,
  action: WeatherActions
): WeatherState => {
  switch (action.type) {
    case 'WEATHER_FETCH_LOADING':
      return {
        ...state,
        state: WeatherStateEnum.LOADING,
        weatherData: null,
      }
    case 'WEATHER_FETCH_SUCCESS':
      return {
        ...state,
        state: WeatherStateEnum.LOADED,
        weatherData: action.weather,
      }
    case 'WEATHER_FETCH_ERROR':
      return {
        ...state,
        state: WeatherStateEnum.ERROR,
        weatherData: null,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}
