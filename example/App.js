import React from 'react'

import { View } from 'react-native'
import {
  Box,
  NeoText,
  Badge,
  SizedBox,
  useTheme,
  Skeleton,
  SCREEN_SIZE,
  Avatar,
  NeoButton,
  ButtonSize,
  NeoImage,
  ButtonType,
} from 'rn-neo-kit'

export const App = () => {
  const { colors } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: colors.background, justifyContent: 'center', paddingHorizontal: 16 }}>
      <Box>
        <NeoText>Box Gradient Demo</NeoText>
        <Badge disabled={false} value={'10'} boxProps={{ style: { position: 'absolute' } }} />
      </Box>
      <SizedBox height={10} />
      <Box>
        <NeoText>Box Demo</NeoText>
      </Box>
      <SizedBox height={10} />
      <Skeleton width={SCREEN_SIZE.WIDTH - 32} viewBoxWidth={SCREEN_SIZE.WIDTH} viewBoxHeight={100}>
        <Skeleton.Box height={50} width={200} x={20} y={20} />
      </Skeleton>
      <SizedBox height={10} />
      <Avatar source={{ uri: 'https://picsum.photos/200/300' }} size={20} title={'NP'} />
      <NeoImage ratio={1.5} width={50} source={{ uri: 'https://picsum.photos/200/300' }} />
      <SizedBox height={10} />
      <View style={{ alignItems: 'flex-start' }}>
        <NeoButton title={'Demo Button'} onPress={() => {}} size={ButtonSize.m} />
      </View>
      <NeoButton type={ButtonType.secondary} title={'Demo Button'} onPress={() => {}} size={ButtonSize.m} />
      <NeoButton type={ButtonType.text} title={'Demo Button'} onPress={() => {}} size={ButtonSize.m} />
    </View>
  )
}
