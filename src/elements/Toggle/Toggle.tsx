import React, { useMemo } from 'react'

import { Pressable, View } from 'react-native'
import type { SvgProps } from 'react-native-svg'

import * as ToggleIcons from './assets/icons'
import { AnimatedToggleIcon } from './components/AnimatedToggleIcon'
import { Switcher } from './Switcher'
import type { ToggleProps } from './Toggle.type'

import { ContainerStyle, CustomComponent, NeoText, RS, SizedBox, typography, useTheme } from 'rn-neo-kit'

export const Toggle = ({
  type,
  checked,
  disabled = false,
  ActiveIcon,
  InActiveIcon,
  ActiveDisabledIcon,
  InActiveDisabledIcon,
  title,
  titleStyle,
  description,
  descriptionStyle,
  children,
  activeColor,
  inactiveColor,
  disableInactiveColor,
  disabledActiveColor,
  iconSize = 16,
  onPress,
  containerStyle,
  reversed = false,
}: ToggleProps) => {
  const { colors } = useTheme()

  const handlePress = () => {
    onPress?.()
  }

  const IconComponent = useMemo((): CustomComponent<SvgProps> => {
    const defaultIcon = (() => {
      switch (type) {
        case 'radio':
          return {
            ActiveIcon: ToggleIcons.RadioActive,
            InActiveIcon: ToggleIcons.RadioInactive,
            ActiveDisabledIcon: ToggleIcons.RadioDisableActive,
            InActiveDisabledIcon: ToggleIcons.RadioDisableInactive,
          }
        case 'select_box':
          return {
            ActiveIcon: ToggleIcons.SelectBoxActive,
            InActiveIcon: ToggleIcons.SelectBoxInactive,
            ActiveDisabledIcon: ToggleIcons.SelectBoxDisableActive,
            InActiveDisabledIcon: ToggleIcons.SelectBoxDisableInactive,
          }
        default:
          return null
      }
    })()

    if (disabled) {
      if (checked) {
        return ActiveDisabledIcon || defaultIcon?.ActiveDisabledIcon!
      }
      return InActiveDisabledIcon || defaultIcon?.InActiveDisabledIcon!
    }
    if (checked) {
      return ActiveIcon || defaultIcon?.ActiveIcon!
    }
    return InActiveIcon || defaultIcon?.InActiveIcon!
  }, [type, disabled, checked])

  const getIconColor = () => {
    if (disabled) {
      if (checked) {
        return disabledActiveColor || colors.secondary
      }
      return disableInactiveColor || colors.toggle.disabledInactive
    }
    if (checked) {
      return activeColor || colors.toggle.active
    }
    return inactiveColor || colors.toggle.inactive
  }

  const renderTitle = () => {
    if (children) {
      return (
        <>
          <SizedBox width={10} />
          {children}
        </>
      )
    }
    if (!!title || !!description) {
      return (
        <>
          <SizedBox width={10} />
          <View>
            {!!title && (
              <NeoText type={typography.body1_medium} style={titleStyle}>
                {title}
              </NeoText>
            )}
            {!!description && (
              <NeoText type={typography.subtitle2_regular} color={colors.text.description} style={descriptionStyle}>
                {description}
              </NeoText>
            )}
          </View>
        </>
      )
    }
    return null
  }

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={[
        ContainerStyle.spaceBetweenRow,
        // eslint-disable-next-line react-native/no-inline-styles
        reversed && { flexDirection: 'row-reverse' },
        containerStyle,
      ]}
    >
      {type === 'switch' ? (
        <Switcher
          checked={checked}
          onPress={handlePress}
          disabled={disabled}
          activeColor={activeColor || colors.toggle.active}
          disabledActiveColor={disabledActiveColor || colors.secondary}
          inactiveColor={inactiveColor || colors.toggle.inactive}
          disableInactiveColor={disableInactiveColor || colors.toggle.disabledInactive}
        />
      ) : (
        <AnimatedToggleIcon
          icon={IconComponent({
            width: RS.h(iconSize),
            height: RS.h(iconSize),
            color: getIconColor(),
            stroke: colors.background,
          })}
          checked={checked}
        />
      )}
      {renderTitle()}
    </Pressable>
  )
}
