import type { Color } from './color.type'

// export type ThemeMode = 'light' | 'dark'
export type ThemeMode = 'light'
export type Theme = {
  colors: Color
  // typography: Font
}

export type ThemeAction = { type: 'CHANGE_THEME'; themeName: ThemeMode }
