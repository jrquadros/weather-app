import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import { LightTheme } from './utils/Theme'
export const App = () => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={LightTheme}>
        <Text>App</Text>
      </ThemeProvider>
    </Provider>
  )
}
