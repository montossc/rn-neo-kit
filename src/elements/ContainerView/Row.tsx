import React from 'react'

import { View } from 'react-native'

import type { ContainerViewProps } from './ContainerView.type'

import { ContainerStyle, convertMargin, convertPadding } from 'rn-neo-kit'

export const Row = ({ style, margin = 0, padding = 0, spacing = 0, ...props }: ContainerViewProps) => {
  return (
    <View
      style={[ContainerStyle.row, convertPadding(padding), convertMargin(margin), { gap: spacing }, style]}
      {...props}
    />
  )
}
