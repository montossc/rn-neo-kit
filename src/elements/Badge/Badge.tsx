import React from 'react'

import type { BadgeProps } from './Badge.type'

import { Box, NeoText, typography, useTheme } from 'rn-neo-kit'

export const Badge = ({
  disabled,
  value,
  padding = { vertical: 2, horizontal: 4 },
  textProps,
  boxProps,
  disabledBackgroundColor,
  disabledTextColor,
  textColor,
  backgroundColor,
}: BadgeProps) => {
  const { colors } = useTheme()
  return (
    <Box
      padding={padding}
      radius={12}
      borderWidth={0}
      backgroundColor={disabled ? disabledBackgroundColor || colors.button.disabled : backgroundColor || colors.accent}
      {...boxProps}
    >
      <NeoText
        type={typography.capital_semiBold}
        color={disabled ? disabledTextColor || colors.text.disabled : textColor || colors.text.secondary}
        {...textProps}
      >
        {value}
      </NeoText>
    </Box>
  )
}
