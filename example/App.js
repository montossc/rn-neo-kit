import React from 'react'

import { View } from 'react-native'
import { Box, NeoText } from 'rn-neo-kit'

import { Badge, SizedBox, useTheme } from '../src'
import { Skeleton } from '../src/elements/Skeleton/Skeleton'
import { SCREEN_SIZE } from '../src/theme/domain/utils/responsiveSize'

export const App = () => {
  const { colors } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', paddingHorizontal: 16 }}>
      <Box>
        <NeoText>Box Demo</NeoText>
        <Badge disabled={false} value={'10'} boxProps={{ style: { position: 'absolute' } }} />
      </Box>
      <SizedBox height={10} />
      <Skeleton width={SCREEN_SIZE.WIDTH - 32} viewBoxWidth={SCREEN_SIZE.WIDTH} viewBoxHeight={100}>
        <Skeleton.Box height={50} width={200} x={20} y={20} />
      </Skeleton>
    </View>
  )
}
