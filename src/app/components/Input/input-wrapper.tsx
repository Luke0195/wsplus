import React, { PropsWithChildren } from 'react'
import * as S from './styles'

type InputWrapperProps = PropsWithChildren

export function InputWrapper(props: InputWrapperProps) {
  const { children } = props
  return <S.Container>{children}</S.Container>
}
