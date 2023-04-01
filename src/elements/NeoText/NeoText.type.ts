import type React from 'react'

import type { ColorValue, TextProps as RNTextProps } from 'react-native'

import type { Typography } from 'rn-neo-kit'

export type NeoTextProps = RNTextProps & {
  type?: Typography
  color?: ColorValue
  children?: React.ReactNode
  flex?: boolean
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto'
}
