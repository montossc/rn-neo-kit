import { MetricValue, RS } from '../../utils'
import type { ResponsiveSize } from '../../utils/metrics'
import type { Margin, Padding } from '../data/ViewStyle'

const responsiveInset: Record<'v' | 'h' | 'mod', (value: MetricValue, factor?: number) => ResponsiveSize | string> = {
  h: value => (typeof value === 'string' ? value : RS.h(value)),
  v: value => (typeof value === 'string' ? value : RS.v(value)),
  mod: (value, factor = 1) => (typeof value === 'string' ? value : RS.mod(value, factor)),
}

export const convertPadding = (padding: Padding) => {
  switch (typeof padding) {
    case 'number':
    case 'string':
      return { padding }
    case 'object':
      if ('horizontal' in padding || 'vertical' in padding) {
        return {
          paddingHorizontal: responsiveInset.h(padding.horizontal ?? 0),
          paddingVertical: responsiveInset.v(padding.vertical ?? 0),
        }
      } else {
        return {
          paddingTop: responsiveInset.v(padding.top),
          paddingBottom: responsiveInset.v(padding.bottom),
          paddingLeft: responsiveInset.h(padding.left),
          paddingRight: responsiveInset.h(padding.right),
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
        return {
          marginHorizontal: responsiveInset.h(margin.horizontal ?? 0),
          marginVertical: responsiveInset.v(margin.vertical ?? 0),
        }
      } else {
        return {
          marginTop: responsiveInset.v(margin.top),
          marginBottom: responsiveInset.v(margin.bottom),
          marginLeft: responsiveInset.h(margin.left),
          marginRight: responsiveInset.h(margin.right),
        }
      }
    default:
      return null
  }
}
