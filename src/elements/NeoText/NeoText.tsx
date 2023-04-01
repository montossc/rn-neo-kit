import React from 'react'

import { Text, TextStyle, View } from 'react-native'

import type { NeoTextProps } from './NeoText.type'

import { typography, useTheme } from 'rn-neo-kit'

export const NeoText = ({
  type = typography.body1_medium,
  color,
  children,
  style,
  flex,
  pointerEvents,
  ...props
}: NeoTextProps) => {
  const { colors } = useTheme()
  return (
    <View pointerEvents={pointerEvents}>
      <Text
        style={[
          type as TextStyle,
          // eslint-disable-next-line react-native/no-inline-styles
          { color: color || colors.text.primary, textAlignVertical: 'center' },
          // eslint-disable-next-line react-native/no-inline-styles
          flex && { flex: 1 },
          style,
        ]}
        {...props}
      >
        {children}
      </Text>
    </View>
  )
}
