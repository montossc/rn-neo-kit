import React from 'react'

import { View } from 'react-native'
import { Box, NeoText } from 'rn-neo-kit'

import { useTheme } from '../src'

export const App = () => {
  const { colors } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', paddingHorizontal: 16 }}>
      <Box>
        <NeoText>Box Demo</NeoText>
      </Box>
    </View>
  )
}
