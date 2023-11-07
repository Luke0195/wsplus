import React from 'react'
import { StatusBar, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../../assets/themes'
import * as S from './styles'

export function App(): React.ReactNode {
  return (
    <ThemeProvider theme={theme.dark}>
      <S.Container>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={theme.dark.colors.primaryColor}
        />
        <View>
          <S.Title> Hello World</S.Title>
        </View>
      </S.Container>
    </ThemeProvider>
  )
}
