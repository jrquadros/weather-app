import axios from 'axios'
import { Config } from '../Config'

export type WeatherApiResponse = {
  weather: {
    main: string
    description: string
    icon: string
  }[]
  main: {
    temp: number
  }
  name: string
}

export const WeatherApiService = axios.create({
  baseURL: Config.weatherApiUrl,
})
