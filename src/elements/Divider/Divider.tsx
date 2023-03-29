import React from 'react'

import { View } from 'react-native'

import type { DividerProps } from './Divider.type'

import { convertMargin, useTheme } from 'rn-neo-kit'

export const Divider = ({ orientation, size = 1, margin = 0, color, style }: DividerProps) => {
  const { colors } = useTheme()
  return (
    <View
      style={[
        orientation === 'vertical' ? { width: size } : { height: size },
        convertMargin(margin),
        { backgroundColor: color || colors.divider },
        style,
      ]}
    />
  )
}
