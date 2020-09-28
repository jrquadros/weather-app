import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ResponseToIconMap, ResponseIcons } from '../../../utils/Helpers'

type WeatherIconPros = {
  iconPath: ResponseIcons
}

export const WeatherIcon = ({ iconPath }: WeatherIconPros) => {
  return <Icon name={ResponseToIconMap[iconPath]} size={100} color="#FFF" />
}
