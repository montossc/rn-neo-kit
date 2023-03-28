import type { ViewStyle } from 'react-native'

export const ContainerStyle: Record<string, ViewStyle> = {
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetweenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}
