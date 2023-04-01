import React from 'react'

import { View } from 'react-native'

import { useTheme } from '../../../theme'
import { RS } from '../../../utils'

import type { SizedBoxProps } from './SizedBox.type'

export const SizedBox = ({ width = 0, height = 0, color }: SizedBoxProps) => {
  const { colors } = useTheme()
  return <View style={{ width: RS.h(width), height: RS.v(height), backgroundColor: color || colors.background }} />
}
