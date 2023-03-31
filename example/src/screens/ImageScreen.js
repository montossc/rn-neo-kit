import React from 'react'

import { ScrollView, StyleSheet } from 'react-native'
import { NeoImage, useTheme, NeoText, Avatar } from 'rn-neo-kit'

import { SCREEN_SIZE } from '../../../src'

export const ImageScreen = () => {
  const { colors } = useTheme()
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      bounces={false}
    >
      <NeoText>Image</NeoText>
      <NeoImage source={{ uri: 'https://picsum.photos/420/180' }} width={SCREEN_SIZE.WIDTH - 32} ratio={21 / 9} />
      <NeoText>Avatar</NeoText>
      <Avatar size={100} source={{ uri: 'https://picsum.photos/420/180' }} />
      <NeoText>Fallback Image</NeoText>
      <NeoImage
        source={{ uri: 'https://picsum.photos/420/18abcg' }}
        defaultSource={require('../../assets/images/DefaultImage.jpeg')}
        width={SCREEN_SIZE.WIDTH - 32}
        ratio={21 / 9}
      />
      <NeoText>Custom Fallback Avatar</NeoText>
      <Avatar size={100} source={{ uri: 'https://picsum.photos/420/18abcg' }} title={'DA'} />
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
})
