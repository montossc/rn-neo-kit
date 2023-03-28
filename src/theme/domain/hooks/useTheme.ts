import { useContext } from 'react'

import type { Theme } from '../../data/models/theme.type'
import { defaultPallet } from '../../data/repositories/defaultPallet'
import { ThemeContext, ThemeContextType } from '../ThemeContext'

export const useTheme: () => Theme = () => {
  const { theme: themeMode, setTheme, pallet } = useContext<ThemeContextType>(ThemeContext)

  return {
    colors: pallet ? pallet[themeMode] : defaultPallet[themeMode],
    setTheme,
  }
}
