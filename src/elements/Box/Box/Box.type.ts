import type { ColorValue, PressableProps } from 'react-native'

import type { Padding } from '../../../styles'

export type BoxProps = PressableProps & {
  padding?: Padding
  borderWidth?: number
  borderColor?: ColorValue
  radius?: number
  backgroundColor?: ColorValue | ColorValue[]
  onPress?: () => void
}
