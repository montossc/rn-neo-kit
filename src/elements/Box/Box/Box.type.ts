import type { ColorValue, PressableProps } from 'react-native'

import type { Padding } from '../../../styles'

export interface BoxProps extends PressableProps {
  padding?: Padding
  borderWidth?: number
  borderColor?: ColorValue
  radius?: number
  backgroundColor?: ColorValue
  onPress?: () => void
}
