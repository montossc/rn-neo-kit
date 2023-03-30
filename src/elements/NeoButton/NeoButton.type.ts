import type { ColorValue, PressableProps } from 'react-native'

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

export type ButtonProps = PressableProps & {
  type?: ButtonType
  size?: ButtonSize
  title: string
  colors?: ColorValue[]
  loading?: boolean
  onPress: () => void
}
