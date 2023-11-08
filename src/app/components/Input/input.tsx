import React from 'react'
import { TextInputProps as RNTextInputProps, TextInput } from 'react-native'

interface TextInputProps extends RNTextInputProps {}

export function Input(props: TextInputProps) {
  return <TextInput {...props} />
}
