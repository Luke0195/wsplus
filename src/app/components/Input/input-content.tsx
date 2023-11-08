import React, { PropsWithChildren } from 'react'
import * as S from './styles'

type InputContent = PropsWithChildren

export function InputContent(props: InputContent) {
  const { children } = props
  return <S.Content>{children}</S.Content>
}
