import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
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
    primary: '#16DCF2',
    secondary: '#F26DDC',
    white: '#FFFFFF',
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '32px',
  },
}
