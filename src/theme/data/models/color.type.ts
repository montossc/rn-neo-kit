import type { ColorValue } from 'react-native'

type BrandColor = {
  primary: ColorValue
  secondary: ColorValue
  accent: ColorValue
}

type ElementColor = {
  button: {
    pressed: ColorValue
    disabled: ColorValue
  }
  text: {
    primary: ColorValue
    secondary: ColorValue
    feature: ColorValue
    disabled: ColorValue
    description: ColorValue
  }
  border: {
    primary: ColorValue
    disabled: ColorValue
  }
  toggle: {
    inactive: ColorValue
    disabledInactive: ColorValue
    active: ColorValue
  }
  input: {
    border: ColorValue
  }
  background: ColorValue
  divider: ColorValue
  error: ColorValue
  success: ColorValue
  warning: ColorValue
  skeleton: ColorValue
}
type OtherColor = {
  // yellow: ColorValue
}

export type Color = BrandColor & ElementColor & OtherColor
export type Pallet = {
  // dark: Color
  light: Color
}
