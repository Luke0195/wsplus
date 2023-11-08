import React from 'react'
import { TextProps } from './protocols'
import * as S from './styles'

export function Text({ children, ...rest }: TextProps): JSX.Element {
  return <S.Text {...rest}>{children}</S.Text>
}
