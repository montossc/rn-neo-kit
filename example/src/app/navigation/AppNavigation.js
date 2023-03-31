import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ButtonScreen } from '../../screens/ButtonScreen'
import { HomeScreen } from '../../screens/HomeScreen'
import { ImageScreen } from '../../screens/ImageScreen'

export const NativeStack = createNativeStackNavigator()

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen name={'HomeScreen'} component={HomeScreen} />
        <NativeStack.Screen name={'ButtonScreen'} component={ButtonScreen} />
        <NativeStack.Screen name={'ImageScreen'} component={ImageScreen} />
      </NativeStack.Navigator>
    </NavigationContainer>
  )
}
