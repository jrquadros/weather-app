import { Action } from 'redux';
import { WeatherReducer, defaultWeatherState, WeatherState } from './WeatherReducer';

export interface RootState {
  weather: WeatherState;
}

const defaultState = (): RootState => {
  return { weather: defaultWeatherState };
};

export const RootReducer = (state: RootState = defaultState(), action: Action): RootState => {
  return {
    weather: WeatherReducer(state.weather, action),
  };
};
