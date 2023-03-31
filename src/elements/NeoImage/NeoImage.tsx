import React, { useCallback, useMemo, useState } from 'react'

import { Rect } from 'react-content-loader/native'
import { Pressable, StyleSheet, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { Skeleton } from '../Skeleton/Skeleton'

import type { NeoImageProps } from './NeoImage.type'

import type { ResponsiveSize } from 'rn-neo-kit'
import { RS } from 'rn-neo-kit'

export const NeoImage = ({
  onPress,
  onLoadStart,
  onLoadEnd,
  resizeMode,
  style,
  width,
  height,
  ratio,
  radius = 16,
  transitionDuration = 300,
  placeholder,
  fallback = true,
  FallbackComponent,
  ...imageProps
}: NeoImageProps) => {
  const [error, setError] = useState<boolean>(false)
  const animatedLoading = useSharedValue<boolean>(false)
  const animatedPlaceholderStyle = useAnimatedStyle(() => ({
    opacity: withTiming(animatedLoading.value ? 1 : 0, { duration: transitionDuration }),
  }))

  const _onLoadImage = useCallback(() => {
    animatedLoading.value = true
    onLoadStart?.()
  }, [])
  const _onLoadedImage = useCallback(() => {
    animatedLoading.value = false
    onLoadEnd?.()
  }, [])
  const _onError = () => {
    setError(true)
  }

  const _imageSize: { width: ResponsiveSize; height: ResponsiveSize } = useMemo(() => {
    if (!height) {
      return {
        width: RS.h(width!),
        height: (RS.h(width!) / ratio) as ResponsiveSize,
      }
    }
    if (!width) {
      return {
        height: RS.v(height!),
        width: (ratio * RS.v(height!)) as ResponsiveSize,
      }
    }
    return {
      width: RS.h(0),
      height: RS.h(0),
    }
  }, [width, height, ratio])
  return (
    <Pressable onPress={onPress}>
      <FastImage
        style={[_imageSize, { borderRadius: radius }, style]}
        onLoadStart={_onLoadImage}
        onLoadEnd={_onLoadedImage}
        onError={_onError}
        resizeMode={resizeMode || FastImage.resizeMode.contain}
        fallback={fallback}
        {...imageProps}
      />
      {error && FallbackComponent && <View style={StyleSheet.absoluteFill}>{FallbackComponent}</View>}
      <Animated.View style={[StyleSheet.absoluteFill, animatedPlaceholderStyle]}>
        {placeholder ? (
          placeholder({ width: _imageSize.width, height: _imageSize.height, radius })
        ) : (
          <Skeleton width={_imageSize.width} viewBoxWidth={_imageSize.width} viewBoxHeight={_imageSize.height}>
            <Rect
              x={'0'}
              y={'0'}
              width={_imageSize.width.toString()}
              height={_imageSize.height.toString()}
              rx={radius.toString()}
              ry={radius.toString()}
            />
          </Skeleton>
        )}
      </Animated.View>
    </Pressable>
  )
}
