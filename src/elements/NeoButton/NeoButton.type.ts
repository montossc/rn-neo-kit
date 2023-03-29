import type { PressableProps } from 'react-native'

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  text = 'text',
}

export enum ButtonSize {
  l = 'l',
  m = 'm',
  s = 's',
}

export interface ButtonProps extends PressableProps {
  type?: ButtonType
  size?: ButtonSize
  title: string
  colors?: (string | number)[]
  loading?: boolean
  onPress: () => void
}
