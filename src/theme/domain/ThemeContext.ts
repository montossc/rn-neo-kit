import { createContext } from 'react'

import type { Pallet } from '../data/models/color.type'
import type { ThemeMode } from '../data/models/theme.type'
import { defaultPallet } from '../data/repositories/defaultPallet'

export type ThemeContextType = { theme: ThemeMode; setTheme: (theme: ThemeMode) => void; pallet?: Pallet }
export const initialState: ThemeContextType = {
  theme: 'light',
  setTheme: () => {},
  pallet: defaultPallet,
}
export const ThemeContext = createContext<ThemeContextType>(initialState)
