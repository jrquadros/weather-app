import { Weather } from '../../entities/Weather';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { WeatherState } from '../reducers/WeatherReducer';
import { WeatherApiService, WeatherApiResponse } from '../../services/WeatherApiService';
import { Config } from '../../Config';

import { AxiosResponse } from 'axios';
import { AppThunk } from '../Store';

export const ACTION_WEATHER_FETCH = 'WEATHER_FETCH';
export const ACTION_WEATHER_FETCH_SUCCESS = 'WEATHER_FETCH_SUCCESS';
export const ACTION_WEATHER_FETCH_ERROR = 'WEATHER_FETCH_ERROR';

export type WeatherActions =
  | IActionWeatherFetch
  | IActionWeatherFetchSuccess
  | IActionWeatherFetchError;

export const isAction = <A extends Action>(action: Action, type: string): action is A => {
  return action.type === type;
};

export interface IActionWeatherFetch extends Action {
  type: 'WEATHER_FETCH';
}

export interface IActionWeatherFetchSuccess extends Action {
  type: 'WEATHER_FETCH_SUCCESS';
  weather: Weather;
}

export interface IActionWeatherFetchError extends Action {
  type: 'WEATHER_FETCH_ERROR';
  errorMessage: string;
}

const dispatchFechWeatherLoading = (): IActionWeatherFetch => {
  return {
    type: ACTION_WEATHER_FETCH,
  };
};

const dispatchFetchWeatherSuccess = (weather: Weather): IActionWeatherFetchSuccess => {
  return {
    type: ACTION_WEATHER_FETCH_SUCCESS,
    weather,
  };
};

const dispatchFetchWeatherError = (error: Error): IActionWeatherFetchError => {
  return {
    type: ACTION_WEATHER_FETCH_ERROR,
    errorMessage: error.message,
  };
};

export const ActionFetchWeather = (coordinates: { lat: number; lon: number }): AppThunk => async (
  dispatch: ThunkDispatch<WeatherState, void, Action>
) => {
  const { lat, lon } = coordinates;
  dispatch(dispatchFechWeatherLoading());

  WeatherApiService.get('/', {
    params: { lat, lon, appid: Config.weatherApiKey, units: 'metric' },
  })
    .then((res: AxiosResponse<WeatherApiResponse>) => {
      console.log('LAT LON', lat, lon);
      const weather: Weather = {
        description: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        main: res.data.weather[0].main,
        name: res.data.name,
        temp: res.data.main.temp,
      };
      dispatch(dispatchFetchWeatherSuccess(weather));
    })
    .catch((err: Error) => {
      dispatch(dispatchFetchWeatherError(err));
      console.log(err);
      console.log('LAT LON  ERRO', lat, lon);
    });
};
