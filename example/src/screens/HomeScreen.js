import React from 'react'

import { View, StyleSheet, ScrollView } from 'react-native'
import { Box, NeoText, Badge, useTheme, Skeleton, SCREEN_SIZE, Avatar, NeoButton, ButtonSize } from 'rn-neo-kit'

export const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme()
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      bounces={false}
    >
      <Avatar source={{ uri: 'https://picsum.photos/200/300' }} size={50} title={'NP'} />
      <Box>
        <NeoText>Demo Box</NeoText>
      </Box>
      <View>
        <Box>
          <NeoText>Demo Box with Badge</NeoText>
        </Box>
        <Badge disabled={false} value={'10'} boxProps={{ style: styles.badgeContainer }} />
      </View>
      <Skeleton width={SCREEN_SIZE.WIDTH - 32} viewBoxWidth={SCREEN_SIZE.WIDTH} viewBoxHeight={70}>
        <Skeleton.Box height={50} width={SCREEN_SIZE.WIDTH - 32} x={20} y={20} />
      </Skeleton>
      <NeoButton
        title={'Demo Button Screen'}
        onPress={() => {
          navigation.navigate('ButtonScreen')
        }}
        size={ButtonSize.m}
      />
      <NeoButton
        title={'Demo Image Screen'}
        onPress={() => {
          navigation.navigate('ImageScreen')
        }}
        size={ButtonSize.m}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  badgeContainer: { position: 'absolute', top: -5, right: -5 },
})
