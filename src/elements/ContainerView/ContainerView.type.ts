import type { ViewProps } from 'react-native'

import type { Margin, Padding } from 'rn-neo-kit'

export type ContainerViewProps = Omit<ViewProps, 'style'> & {
  padding?: Padding
  margin: Margin
  spacing?: number
} & Omit<
    Pick<ViewProps, 'style'>,
    | 'padding'
    | 'paddingBottom'
    | 'paddingHorizontal'
    | 'paddingLeft'
    | 'paddingRight'
    | 'paddingTop'
    | 'paddingVertical'
    | 'margin'
    | 'marginBottom'
    | 'marginHorizontal'
    | 'marginLeft'
    | 'marginRight'
    | 'marginTop'
    | 'marginVertical'
    | 'flex-direction'
  >
