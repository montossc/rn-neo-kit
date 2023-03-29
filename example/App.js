import React from 'react'

import { View } from 'react-native'
import { Box, NeoText, Badge, SizedBox, useTheme, Skeleton, SCREEN_SIZE, Avatar } from 'rn-neo-kit'

import { NeoImage } from '../src'

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
      <SizedBox height={10} />
      <Avatar source={{ uri: 'https://picsum.photos/200/300' }} size={20} title={'NP'} />
      <NeoImage ratio={1.5} width={50} source={{ uri: 'https://picsum.photos/200/300' }} />
    </View>
  )
}
