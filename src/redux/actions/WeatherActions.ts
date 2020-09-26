import { Weather } from '../../entities/Weather'
import { Action, Dispatch } from 'redux'

export const ACTION_WEATHER_FETCH = 'WEATHER_FETCH_LOADING'
export const ACTION_WEATHER_FETCH_SUCCESS = 'WEATHER_FETCH_SUCCESS'
export const ACTION_WEATHER_FETCH_ERROR = 'WEATHER_FETCH_ERROR'

export const isAction = <A extends Action>(action: Action, type: string): action is A => {
  return action.type === type
}

export interface IActionWeatherFetch extends Action {
  type: 'WEATHER_FETCH_LOADING'
}

export interface IActionWeatherFetchSuccess extends Action {
  type: 'WEATHER_FETCH_SUCCESS'
  weather: Weather
}

export interface IActionWeatherFetchError extends Action {
  type: 'WEATHER_FETCH_ERROR'
  errorMessage: string
}

export type WeatherActions =
  | IActionWeatherFetch
  | IActionWeatherFetchSuccess
  | IActionWeatherFetchError

const dispatchFechWeatherLoading = (): IActionWeatherFetch => {
  return {
    type: ACTION_WEATHER_FETCH,
  }
}

const dispatchFetchWeatherSuccess = (weather: Weather): IActionWeatherFetchSuccess => {
  return {
    type: ACTION_WEATHER_FETCH_SUCCESS,
    weather,
  }
}

const dispatchFetchWeatherError = (error: Error): IActionWeatherFetchError => {
  return {
    type: ACTION_WEATHER_FETCH_ERROR,
    errorMessage: error.message,
  }
}

export const ActionFetchWeather = async () => (dispatch: Dispatch) => {
  try {
    // TODO: fetch weather here
    dispatch(dispatchFechWeatherLoading())
  } catch (error) {
    // TODO: dispatch error
  }
}
