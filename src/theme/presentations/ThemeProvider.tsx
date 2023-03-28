import React, { FC, ReactNode, useState } from 'react'

import type { Pallet } from '../data/models/color.type'
import { initialState, ThemeContext } from '../domain/ThemeContext'

export const ThemeProvider: FC<{ children: ReactNode; pallet?: Pallet }> = ({ children, pallet }) => {
  const [theme, setTheme] = useState(initialState.theme)
  return <ThemeContext.Provider value={{ theme, setTheme, pallet }}>{children}</ThemeContext.Provider>
}
