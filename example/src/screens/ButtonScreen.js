import React from 'react'

import { ScrollView, StyleSheet, View } from 'react-native'
import { ButtonType, NeoButton, ButtonSize, useTheme } from 'rn-neo-kit'

import { ContainerStyle } from '../../../src'

export const ButtonScreen = () => {
  const { colors } = useTheme()
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      bounces={false}
    >
      <View style={[ContainerStyle.row, { gap: 8, flexWrap: 'wrap' }]}>
        <NeoButton title={'S Primary'} onPress={() => {}} size={ButtonSize.s} />
        <NeoButton title={'M Primary'} onPress={() => {}} size={ButtonSize.m} />
        <NeoButton title={'L Primary'} onPress={() => {}} size={ButtonSize.l} />
      </View>
      <View style={[ContainerStyle.row, { gap: 8, flexWrap: 'wrap' }]}>
        <NeoButton title={'Primary Disabled'} onPress={() => {}} size={ButtonSize.m} disabled />
        <NeoButton title={'Primary Loading'} onPress={() => {}} size={ButtonSize.m} loading />
        <NeoButton title={'Primary Disabled Loading'} onPress={() => {}} size={ButtonSize.m} loading disabled />
      </View>
      <View style={[ContainerStyle.row, { gap: 8, flexWrap: 'wrap' }]}>
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
      </View>
      <View style={[ContainerStyle.row, { gap: 8, flexWrap: 'wrap' }]}>
        <NeoButton title={'Text'} type={ButtonType.text} onPress={() => {}} />
        <NeoButton title={'Text Disabled'} type={ButtonType.text} disabled onPress={() => {}} />
        <NeoButton title={'Text Loading'} type={ButtonType.text} loading onPress={() => {}} />
        <NeoButton title={'Text Disabled Loading'} type={ButtonType.secondary} loading disabled onPress={() => {}} />
      </View>
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
