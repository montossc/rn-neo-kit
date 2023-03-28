import { RS } from '../../theme'
import type { Margin, Padding } from '../data/ViewStyle'

export const convertPadding = (padding: Padding) => {
  switch (typeof padding) {
    case 'number':
      return { padding }
    case 'object':
      if ('horizontal' in padding || 'vertical' in padding) {
        return { paddingHorizontal: RS.h(padding.horizontal ?? 0), paddingVertical: RS.v(padding.vertical ?? 0) }
      } else {
        return {
          paddingTop: RS.v(padding.top),
          paddingBottom: RS.v(padding.bottom),
          paddingLeft: RS.h(padding.left),
          paddingRight: RS.h(padding.right),
        }
      }
    default:
      return null
  }
}

export const convertMargin = (margin: Margin) => {
  switch (typeof margin) {
    case 'number':
      return { margin }
    case 'object':
      if ('horizontal' in margin || 'vertical' in margin) {
        return { marginHorizontal: RS.h(margin.horizontal ?? 0), marginVertical: RS.v(margin.vertical ?? 0) }
      } else {
        return {
          marginTop: RS.v(margin.top),
          marginBottom: RS.v(margin.bottom),
          marginLeft: RS.h(margin.left),
          marginRight: RS.h(margin.right),
        }
      }
    default:
      return null
  }
}
