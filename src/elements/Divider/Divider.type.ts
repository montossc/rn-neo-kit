import type { ColorValue, ViewStyle } from 'react-native'

import type { Margin } from 'rn-neo-kit'

export type DividerProps = {
  orientation: 'vertical' | 'horizontal'
  size?: number
  margin?: Margin
  color?: ColorValue
  style?: ViewStyle | ViewStyle[]
}
