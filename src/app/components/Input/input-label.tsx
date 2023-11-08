import React from 'react'
import { Text } from 'react-native'

type InputLabelProps = {
  content: string
}

export function InputLabel(props: InputLabelProps) {
  return <Text> {props.content}</Text>
}
