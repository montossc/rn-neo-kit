import React from 'react'

import { Text, TextStyle } from 'react-native'

import type { NeoTextProps } from './NeoText.type'

import { typography, useTheme } from 'rn-neo-kit'

export const NeoText = ({ type = typography.body1_medium, color, children, style, flex, ...props }: NeoTextProps) => {
  const { colors } = useTheme()
  return (
    <Text
      style={[
        type as TextStyle,
        { color: color || colors.text.primary, textAlignVertical: 'center' },
        flex && { flex: 1 },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  )
}
