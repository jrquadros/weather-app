import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  ACTION_WEATHER_FETCH,
  ACTION_WEATHER_FETCH_SUCCESS,
  ActionFetchWeather,
} from '../actions/WeatherActions'
import fetchMock from 'fetch-mock'
import { Config } from '../../Config'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Weather async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('creates FETCH_SUCCESS when fetching weather has been done', () => {
    fetchMock.getOnce(Config.weatherApiUrl, {
      body: { weather: {}, name: {} },
      headers: { 'content-type': 'application/json' },
    })

    const expectedActions = [ACTION_WEATHER_FETCH, ACTION_WEATHER_FETCH_SUCCESS]

    const store = mockStore({ weather: {} })

    store.dispatch(ActionFetchWeather({ lat: 1, lon: 1 }))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
