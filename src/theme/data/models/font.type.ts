export type FontFamily = Record<
  | 'black'
  | 'blackItalic'
  | 'extraBold'
  | 'extraBoldItalic'
  | 'bold'
  | 'boldItalic'
  | 'semiBold'
  | 'semiBoldItalic'
  | 'medium'
  | 'mediumItalic'
  | 'regular'
  | 'italic'
  | 'light'
  | 'lightItalic'
  | 'extraLight'
  | 'extraLightItalic',
  string
>

type FontSpec = {
  fontSize: number
  lineHeight: number
}

export type FontSize<T extends string> = Record<T, FontSpec>

export type Typography = FontSpec & {
  fontFamily: string
}

export type Fonts<TypoVariants extends string> = {
  [key in `${keyof FontSize<TypoVariants>}_${keyof FontFamily}`]: Typography
}
