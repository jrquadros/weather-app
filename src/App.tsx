import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import { LightTheme } from './utils/Theme'
import { RootScreen } from './components/RootScreen'
export const App = () => {
  return (
    <Provider store={Store}>
      <ThemeProvider theme={LightTheme}>
        <RootScreen />
      </ThemeProvider>
    </Provider>
  )
}
