import React from 'react'
import { useState, useCallback } from 'react'

import { ScrollView, StyleSheet, View } from 'react-native'
import { useTheme, Toggle, ContainerStyle, NeoImage, NeoText } from 'rn-neo-kit'

import { Custom } from '../../assets/icons'

export const ToggleScreen = () => {
  const { colors } = useTheme()
  const [checked, setChecked] = useState(false)

  const ActiveIcon = useCallback(
    ({ width, height, color }) => <Custom width={width} height={height} color={color} />,
    []
  )
  const InActiveIcon = useCallback(
    ({ width, height, color }) => <Custom width={width} height={height} color={color} />,
    []
  )

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      bounces={false}
    >
      <View style={[ContainerStyle.row, { gap: 12, flexWrap: 'wrap' }]}>
        <Toggle checked={checked} onPress={() => setChecked(prev => !prev)} type={'radio'} title={'Radio Button'} />
        <Toggle
          checked={checked}
          onPress={() => setChecked(prev => !prev)}
          type={'radio'}
          title={'Radio Button'}
          description={'With description'}
        />
        <Toggle
          checked={checked}
          disabled
          onPress={() => setChecked(prev => !prev)}
          type={'radio'}
          title={'Radio Button'}
          description={'Disabled'}
        />
        <Toggle
          checked={checked}
          reversed
          onPress={() => setChecked(prev => !prev)}
          type={'radio'}
          title={'Radio Button'}
          description={'Reversed'}
        />
        <Toggle
          checked={checked}
          onPress={() => setChecked(prev => !prev)}
          type={'radio'}
          title={'Radio Button'}
          description={'Custom icon'}
          ActiveIcon={ActiveIcon}
          InActiveIcon={InActiveIcon}
        />
        <Toggle checked={checked} onPress={() => setChecked(prev => !prev)} type={'radio'}>
          <NeoImage ratio={1} width={50} defaultSource={require('../../assets/images/DefaultImage.jpeg')} />
          <NeoText>Custom all label</NeoText>
        </Toggle>
      </View>
      <View style={[ContainerStyle.row, { gap: 12, flexWrap: 'wrap' }]}>
        <Toggle checked={checked} onPress={() => setChecked(prev => !prev)} type={'select_box'} title={'Select Box'} />
        <Toggle
          checked={checked}
          disabled
          onPress={() => setChecked(prev => !prev)}
          type={'select_box'}
          title={'Select Box'}
          description={'Disabled'}
        />
        <Toggle
          checked={checked}
          reversed
          onPress={() => setChecked(prev => !prev)}
          type={'select_box'}
          title={'Select Box'}
          description={'Reversed'}
        />
      </View>
      <View style={[ContainerStyle.row, { gap: 12, flexWrap: 'wrap' }]}>
        <Toggle checked={checked} onPress={() => setChecked(prev => !prev)} type={'switch'} title={'Switch'} />
        <Toggle
          checked={checked}
          disabled
          onPress={() => setChecked(prev => !prev)}
          type={'switch'}
          title={'Switch'}
          description={'Disabled'}
        />
        <Toggle
          checked={checked}
          reversed
          onPress={() => setChecked(prev => !prev)}
          type={'switch'}
          title={'Switch'}
          description={'Reversed'}
        />
      </View>
      <View style={[ContainerStyle.row, { gap: 12, flexWrap: 'wrap' }]}>
        <Toggle
          checked={checked}
          onPress={() => setChecked(prev => !prev)}
          type={'custom'}
          title={'Custom'}
          ActiveIcon={ActiveIcon}
          InActiveIcon={InActiveIcon}
          ActiveDisabledIcon={ActiveIcon}
          InActiveDisabledIcon={ActiveIcon}
        />
        <Toggle
          checked={checked}
          disabled
          onPress={() => setChecked(prev => !prev)}
          type={'custom'}
          title={'Custom'}
          description={'Disabled'}
          ActiveIcon={ActiveIcon}
          InActiveIcon={InActiveIcon}
          ActiveDisabledIcon={ActiveIcon}
          InActiveDisabledIcon={ActiveIcon}
        />
        <Toggle
          checked={checked}
          reversed
          onPress={() => setChecked(prev => !prev)}
          type={'custom'}
          title={'Custom'}
          description={'Reversed'}
          ActiveIcon={ActiveIcon}
          InActiveIcon={InActiveIcon}
          ActiveDisabledIcon={ActiveIcon}
          InActiveDisabledIcon={ActiveIcon}
        />
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
