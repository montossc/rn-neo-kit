import React from 'react'

import { StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import type { AvatarProps } from './Avatar.type'

import { NeoImage, NeoText, RS, typography, useTheme } from 'rn-neo-kit'

export const Avatar = ({
  size,
  ratio = 1,
  resizeMode = FastImage.resizeMode.cover,
  title,
  FallbackComponent,
  ...props
}: AvatarProps) => {
  const { colors } = useTheme()
  const DefaultAvatar = title && (
    <View
      style={[
        {
          backgroundColor: colors.button.disabled,
          borderRadius: RS.h(size) / 2,
          width: RS.h(size),
          height: RS.h(size),
        },
        styles.defaultContainer,
      ]}
    >
      <NeoText
        type={typography.h2_semiBold}
        style={{
          textAlign: 'center',
        }}
      >
        {title || ''}
      </NeoText>
    </View>
  )
  return (
    <NeoImage
      ratio={ratio}
      width={size}
      radius={RS.h(size) / 2}
      resizeMode={resizeMode}
      FallbackComponent={FallbackComponent || DefaultAvatar}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  defaultContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
