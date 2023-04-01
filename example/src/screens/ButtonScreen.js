import React, { useCallback } from 'react'

import { ScrollView, StyleSheet } from 'react-native'
import { ButtonType, NeoButton, ButtonSize, useTheme, Row } from 'rn-neo-kit'

import { RadioActive } from '../../assets/icons'

export const ButtonScreen = () => {
  const { colors } = useTheme()

  const LeftButtonIcon = useCallback(({ size, color }) => <RadioActive width={size} height={size} color={color} />, [])
  const RightButtonIcon = useCallback(({ size, color }) => <RadioActive width={size} height={size} color={color} />, [])
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      bounces={false}
    >
      <Row spacing={8} style={{ flexWrap: 'wrap' }}>
        <NeoButton title={'S Primary'} onPress={() => {}} size={ButtonSize.s} />
        <NeoButton title={'M Primary'} onPress={() => {}} size={ButtonSize.m} />
        <NeoButton title={'L Primary'} onPress={() => {}} size={ButtonSize.l} />
        <NeoButton title={'Icon'} onPress={() => {}} LeftComponent={LeftButtonIcon} RightComponent={RightButtonIcon} />
      </Row>
      <Row spacing={8} style={{ flexWrap: 'wrap' }}>
        <NeoButton title={'Primary Disabled'} onPress={() => {}} size={ButtonSize.m} disabled />
        <NeoButton title={'Primary Loading'} onPress={() => {}} size={ButtonSize.m} loading />
        <NeoButton title={'Primary Disabled Loading'} onPress={() => {}} size={ButtonSize.m} loading disabled />
      </Row>
      <Row spacing={8} style={{ flexWrap: 'wrap' }}>
        <NeoButton title={'Secondary'} type={ButtonType.secondary} onPress={() => {}} />
        <NeoButton title={'Secondary Disabled'} type={ButtonType.secondary} disabled onPress={() => {}} />
        <NeoButton title={'Secondary Loading'} type={ButtonType.secondary} loading onPress={() => {}} />
        <NeoButton
          title={'Secondary Disabled Loading'}
          type={ButtonType.secondary}
          loading
          disabled
          onPress={() => {}}
        />
      </Row>
      <Row spacing={8} style={{ flexWrap: 'wrap' }}>
        <NeoButton title={'Text'} type={ButtonType.text} onPress={() => {}} />
        <NeoButton title={'Text Disabled'} type={ButtonType.text} disabled onPress={() => {}} />
        <NeoButton title={'Text Loading'} type={ButtonType.text} loading onPress={() => {}} />
        <NeoButton title={'Text Disabled Loading'} type={ButtonType.secondary} loading disabled onPress={() => {}} />
      </Row>
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
