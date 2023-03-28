import { Dimensions } from 'react-native'

export const SCREEN_SIZE = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
}
const designBaseSize = {
  width: 375,
  height: 812,
}
export type ResponsiveSize = number & { __TYPE__: 'ResponsiveSize' }
const hScale = (size: number): ResponsiveSize => (size * (SCREEN_SIZE.WIDTH / designBaseSize.width)) as ResponsiveSize
const vScale = (size: number): ResponsiveSize => (size * (SCREEN_SIZE.HEIGHT / designBaseSize.height)) as ResponsiveSize
const modScale = (size: number, factor: number = 1): ResponsiveSize =>
  (size + (hScale(size) - size) * factor) as ResponsiveSize

export const RS = { h: hScale, v: vScale, mod: modScale }
