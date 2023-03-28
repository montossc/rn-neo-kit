import type React from 'react'

import type { ColorValue } from 'react-native'

export type SkeletonProps = {
  width: number
  viewBoxWidth: number
  viewBoxHeight: number
  color?: ColorValue
  children?: React.ReactNode
}

export type SkeletonElementProps = Record<'x' | 'y' | 'width' | 'height', number>
