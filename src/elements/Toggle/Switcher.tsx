import React from 'react'

import { Platform, Switch } from 'react-native'

import type { ToggleProps } from './Toggle.type'

import { useTheme } from 'rn-neo-kit'

export const Switcher = ({
  checked,
  disabled,
  disabledActiveColor,
  disableInactiveColor,
  activeColor,
  inactiveColor,
  onPress,
}: Pick<
  ToggleProps,
  'checked' | 'disabled' | 'disabledActiveColor' | 'disableInactiveColor' | 'activeColor' | 'inactiveColor' | 'onPress'
>) => {
  const { colors } = useTheme()
  return (
    <Switch
      value={checked}
      disabled={disabled}
      style={Platform.OS === 'ios' && { transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
      trackColor={{
        true: disabled ? disabledActiveColor : activeColor,
        false: disabled ? disableInactiveColor : inactiveColor,
      }}
      thumbColor={colors.background}
      onValueChange={onPress}
    />
  )
}
