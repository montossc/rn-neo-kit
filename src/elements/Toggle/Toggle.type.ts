import type { ReactNode } from 'react'

import type { ColorValue, TextStyle, ViewStyle, StyleProp } from 'react-native'
import type { SvgProps } from 'react-native-svg'

import type { CustomComponent } from '../index'

type CustomToggleIcon = CustomComponent<Pick<SvgProps, 'width' | 'height' | 'color'>>

type CommonProps = {
  checked: boolean
  disabled?: boolean
  reversed?: boolean
  title?: string
  titleStyle?: StyleProp<TextStyle>
  description?: string
  descriptionStyle?: StyleProp<TextStyle>
  children?: ReactNode
  iconSize?: number
  onPress: () => void
  activeColor?: ColorValue
  inactiveColor?: ColorValue
  disabledActiveColor?: ColorValue
  disableInactiveColor?: ColorValue
  containerStyle?: StyleProp<ViewStyle>
}

type SwitchType = {
  ActiveIcon?: never
  InActiveIcon?: never
  ActiveDisabledIcon?: never
  InActiveDisabledIcon?: never
}

type RadioBoxType = {
  ActiveIcon?: CustomToggleIcon
  InActiveIcon?: CustomToggleIcon
  ActiveDisabledIcon?: CustomToggleIcon
  InActiveDisabledIcon?: CustomToggleIcon
}
type CustomType = {
  ActiveIcon: CustomToggleIcon
  InActiveIcon: CustomToggleIcon
  ActiveDisabledIcon: CustomToggleIcon
  InActiveDisabledIcon: CustomToggleIcon
}

export type ToggleProps = CommonProps &
  (
    | ({ type: 'switch' } & SwitchType)
    | ({ type: 'radio' | 'select_box' } & RadioBoxType)
    | ({ type: 'custom' } & CustomType)
  )
