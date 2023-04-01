import React, { useEffect } from 'react'

import Animated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated'
import type { SvgProps } from 'react-native-svg'

export const AnimatedToggleIcon = ({
  width,
  height,
  color,
  stroke,
  icon,
  checked,
}: SvgProps & { icon: (iconProp: SvgProps) => JSX.Element; checked: boolean }) => {
  const animatedCheck = useSharedValue<number>(1)
  useEffect(() => {
    animatedCheck.value = withSequence(
      withTiming(0.9, { duration: 100 }),
      withTiming(1.1, { duration: 100 }),
      withTiming(1, { duration: 100 })
    )
  }, [checked])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: animatedCheck.value }],
    opacity: animatedCheck.value,
  }))

  return <Animated.View style={animatedStyle}>{icon({ width, height, color, stroke })}</Animated.View>
}
