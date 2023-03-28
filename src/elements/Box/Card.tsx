import React from 'react'

import { Keyboard } from 'react-native'

import type { BoxProps } from './Box'
import { Box } from './Box'

export const Card = ({ onPress, children, ...props }: BoxProps) => {
  return (
    <Box
      {...props}
      onPress={() => {
        Keyboard.dismiss()
        onPress?.()
      }}
    >
      {children}
    </Box>
  )
}
