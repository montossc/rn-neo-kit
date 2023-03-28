import React from 'react'

import { View } from 'react-native'

import { RS, useTheme } from '../../../theme'

import type { SizedBoxProps } from './SizedBox.type'

export const SizedBox = ({ width = 0, height = 0, color }: SizedBoxProps) => {
  const { colors } = useTheme()
  return <View style={{ width: RS.h(width), height: RS.v(height), backgroundColor: color || colors.background }} />
}
