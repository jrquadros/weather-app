import React from 'react'
import { NavigationContainer, LinkingOptions } from '@react-navigation/native'
import { WeatherStack } from '../navigators/WeatherStack'

export const RootScreen = () => {
  const linking: LinkingOptions = {
    prefixes: ['/'],
    config: {
      screens: {
        WeatherStack: {
          screens: {
            WeatherInfo: 'weather',
          },
        },
      },
    },
  }

  return (
    <NavigationContainer linking={linking}>
      <WeatherStack />
    </NavigationContainer>
  )
}
