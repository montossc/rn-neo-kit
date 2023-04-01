import type { ColorValue, PressableProps } from 'react-native'

import type { ResponsiveSize } from '../../utils/metrics'
import type { CustomComponent } from '../index'

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

type CustomComponentProps = {
  color: ColorValue
  size: ResponsiveSize
}
export type ButtonProps = PressableProps & {
  type?: ButtonType
  size?: ButtonSize
  title: string
  colors?: ColorValue[]
  loading?: boolean
  onPress: () => void
  LeftComponent?: CustomComponent<CustomComponentProps>
  RightComponent?: CustomComponent<CustomComponentProps>
}
