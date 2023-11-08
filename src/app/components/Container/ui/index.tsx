import React from 'react'
import { ContainerProps } from '../protocols'
import * as S from './styles'

export function Container(props: ContainerProps) {
  return <S.Container {...props}>{props.children}</S.Container>
}
