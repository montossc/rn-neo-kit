import React, { useMemo } from 'react'

import { Pressable, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

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

  const _backgroundColors: string[] = useMemo(() => {
    if (Array.isArray(backgroundColor)) {
      return backgroundColor as string[]
    }
    if (!backgroundColor) {
      return [colors.background, colors.background] as string[]
    }
    return [backgroundColor, backgroundColor] as string[]
  }, [backgroundColor])

  return (
    <LinearGradient
      style={[
        convertPadding(padding),
        {
          borderWidth: RS.h(borderWidth),
          borderColor: borderColor || colors.border.primary,
          borderRadius: RS.h(radius),
        },
        style as ViewStyle,
      ]}
      colors={_backgroundColors}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Pressable onPress={onPress}>{children}</Pressable>
    </LinearGradient>
  )
}
