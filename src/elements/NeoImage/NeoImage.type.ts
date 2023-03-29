import type { ReactNode } from 'react'

import type { FastImageProps } from 'react-native-fast-image'

import type { ResponsiveSize, WidthOrHeight } from 'rn-neo-kit'

export type NeoImageProps = FastImageProps &
  Required<Pick<FastImageProps, 'source'>> & {
    transitionDuration?: number
    onPress?: () => void
    ratio: number
    radius?: number
    placeholder?: (props: { width: ResponsiveSize; height: ResponsiveSize; radius: number }) => ReactNode
    FallbackComponent?: ReactNode
  } & WidthOrHeight
