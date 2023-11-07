declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      xsm: string
      sm: string
      md: string
      default: string
      lg: string
      xl: string
      x2l: string
    }

    sizes: {
      xsm: string
      sm: string
      md: string
      default: string
      lg: string
      xl: string
      x2l: string
    }

    heights: {
      xsm: string
      sm: string
      md: string
      default: string
      lg: string
      xl: string
      x2l: string
    }

    light: {
      primaryColor: '#262626'
      textColor: '#fff'
      secondaryColor: '#E31C79'
    }

    dark: {
      primaryColor: '#f5f5f5'
      textColor: '#c8c8c8'
      secondaryColor: '#be123c'
    }
  }
}
