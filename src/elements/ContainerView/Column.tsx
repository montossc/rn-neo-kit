import React from 'react'

import { View } from 'react-native'

import type { ContainerViewProps } from './ContainerView.type'

import { convertMargin, convertPadding } from 'rn-neo-kit'

export const Column = ({ style, margin = 0, padding = 0, spacing = 0, ...props }: ContainerViewProps) => {
  return <View style={[convertPadding(padding), convertMargin(margin), { gap: spacing }, style]} {...props} />
}
