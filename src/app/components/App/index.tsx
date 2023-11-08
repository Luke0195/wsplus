import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../assets/themes/index'
import { Authentication } from '../../screens/Authentication/index'
import * as S from './styles'

export function App(): React.ReactNode {
  return (
    <ThemeProvider theme={theme.dark}>
      <S.Container>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={theme.dark.colors.primaryColor}
        />
        <Authentication />
      </S.Container>
    </ThemeProvider>
  )
}
