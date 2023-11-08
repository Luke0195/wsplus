import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

type IconsProps = {
  name: string
  size: number
  color: string
}

export function InputIcon(props: IconsProps) {
  const { name, size, color } = props
  return <Icon name={name} size={size || 16} color={color || '#c8c8c8'} />
}
