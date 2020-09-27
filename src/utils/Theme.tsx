import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
    }
    fontSizes: {
      small: string
      medium: string
      large: string
    }
  }
}

export const LightTheme: DefaultTheme = {
  colors: {
    primary: '',
    secondary: '',
  },
  fontSizes: {
    small: '',
    medium: '',
    large: '',
  },
}
