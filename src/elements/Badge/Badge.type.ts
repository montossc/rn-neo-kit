import type { ColorValue } from 'react-native'

import type { NeoTextProps } from '../NeoText/NeoText.type'

import type { BoxProps, Padding } from 'rn-neo-kit'

export type BadgeProps = {
  disabled: boolean
  value: string
  padding?: Padding
  backgroundColor?: ColorValue
  disabledBackgroundColor?: ColorValue
  boxProps?: Omit<BoxProps, 'backgroundColor'>
  textColor?: ColorValue
  disabledTextColor?: ColorValue
  textProps?: Omit<NeoTextProps, 'color'>
}
