import React from 'react'

import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native'

import { ButtonProps, ButtonSize, ButtonType } from './NeoButton.type'

import { Box, ContainerStyle, NeoText, RS, typography, useTheme } from 'rn-neo-kit'

export const NeoButton = ({
  title,
  colors,
  size = ButtonSize.m,
  type = ButtonType.primary,
  disabled,
  loading,
  onPress,
  ...props
}: ButtonProps) => {
  const { colors: themeColors } = useTheme()

  const _buttonBorderColor = (isPressing: boolean) => {
    if (disabled) {
      switch (type) {
        case ButtonType.primary:
          return themeColors.button.disabled
        case ButtonType.secondary:
          return themeColors.border.disabled
        case ButtonType.text:
          return '#00000000'
      }
    }
    if (isPressing) {
      switch (type) {
        case ButtonType.primary:
          return themeColors.button.pressed
        case ButtonType.secondary:
        case ButtonType.text:
          return themeColors.secondary
      }
    }
    if (colors) {
      return colors
    }
    switch (type) {
      case ButtonType.primary:
      case ButtonType.secondary:
        return [themeColors.primary, themeColors.accent]
      case ButtonType.text:
        return themeColors.background
    }
  }
  const _innerBackgroundStyle = (isPressing: boolean) => {
    if ((type === ButtonType.secondary && !isPressing) || (disabled && type !== ButtonType.primary)) {
      return { margin: 1, backgroundColor: themeColors.background }
    }
    return null
  }

  const _textColor = (isPressing: boolean) => {
    if (disabled) {
      return themeColors.text.disabled
    }
    switch (type) {
      case ButtonType.primary:
        return isPressing ? themeColors.text.feature : themeColors.background
      case ButtonType.secondary:
      case ButtonType.text:
        return themeColors.accent
    }
  }

  const _containerStyle = (isPressing: boolean) => [
    ContainerStyle.row,
    styles.container,
    styles[`${size!}Container`],
    _innerBackgroundStyle(isPressing),
  ]

  return (
    <Pressable pointerEvents={'box-only'} disabled={disabled || loading} onPress={onPress} {...props}>
      {({ pressed }) => (
        <Box style={styles.container} backgroundColor={_buttonBorderColor(pressed)} padding={0} borderWidth={0}>
          <View style={_containerStyle(pressed)}>
            {loading ? (
              <ActivityIndicator size={'small'} color={_textColor(pressed)} />
            ) : (
              <NeoText type={typography.button_medium} color={_textColor(pressed)} style={styles.title}>
                {title}
              </NeoText>
            )}
          </View>
        </Box>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: RS.h(32),
    justifyContent: 'center',
  },
  // eslint-disable-next-line react-native/no-unused-styles
  lContainer: {
    minWidth: RS.h(160),
    paddingVertical: RS.v(16),
    paddingHorizontal: RS.h(16),
  },
  // eslint-disable-next-line react-native/no-unused-styles
  mContainer: {
    minWidth: RS.h(130),
    paddingVertical: RS.v(12),
    paddingHorizontal: RS.h(12),
  },
  // eslint-disable-next-line react-native/no-unused-styles
  sContainer: {
    minWidth: RS.h(100),
    paddingVertical: RS.v(12),
    paddingHorizontal: RS.h(12),
  },
  title: { flexGrow: 1, textAlign: 'center' },
})
