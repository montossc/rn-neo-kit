import React from 'react'

import { Pressable, ViewStyle } from 'react-native'

import { convertPadding } from '../../../styles'
import { RS, useTheme } from '../../../theme'

import type { BoxProps } from './Box.type'

export const Box = ({
  padding = 16,
  borderWidth = 1,
  borderColor,
  radius = 16,
  backgroundColor,
  children,
  onPress,
  style,
}: BoxProps) => {
  const { colors } = useTheme()
  return (
    <Pressable
      style={[
        convertPadding(padding),
        {
          borderWidth: RS.h(borderWidth),
          borderColor: borderColor || colors.border.primary,
          borderRadius: RS.h(radius),
          backgroundColor: backgroundColor || colors.background,
        },
        style as ViewStyle,
      ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  )
}
