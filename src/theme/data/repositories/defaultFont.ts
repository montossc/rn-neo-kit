import { RS } from '../../domain/utils/responsiveSize'
import type { FontFamily, Fonts, FontSize } from '../models/font.type'

type CreateFontProps<T extends string> = {
  fontFamily: FontFamily
  fontSize: FontSize<T>
}

export const createTypography = <TypoVariants extends string>({
  fontFamily,
  fontSize,
}: CreateFontProps<TypoVariants>): Fonts<TypoVariants> => {
  return Object.entries(fontSize)
    .flatMap(([sizeKey, sizeVal]) =>
      Object.entries(fontFamily).map(([familyKey, familyVal]) => ({
        [`${sizeKey}_${familyKey}`]: { ...(sizeVal as object), fontFamily: familyVal },
      }))
    )
    .reduce((acc, curr) => ({ ...acc, ...curr }), {}) as Fonts<TypoVariants>
}

export const typography = createTypography({
  fontFamily: {
    black: 'Mulish-Bold',
    blackItalic: 'Mulish-BlackItalic',
    extraBold: 'Mulish-ExtraBold',
    extraBoldItalic: 'Mulish-ExtraBoldItalic',
    bold: 'Mulish-Bold',
    boldItalic: 'Mulish-BoldItalic',
    semiBold: 'Mulish-SemiBold',
    semiBoldItalic: 'Mulish-SemiBoldItalic',
    medium: 'Mulish-Medium',
    mediumItalic: 'Mulish-MediumItalic',
    regular: 'Mulish-Regular',
    italic: 'Mulish-Italic',
    light: 'Mulish-Light',
    lightItalic: 'Mulish-LightItalic',
    extraLight: 'Mulish-ExtraLight',
    extraLightItalic: 'Mulish-ExtraLightItalic',
  },
  fontSize: {
    h1: { fontSize: RS.v(36), lineHeight: RS.v(44) },
    h2: { fontSize: RS.v(30), lineHeight: RS.v(36) },
    h3: { fontSize: RS.v(24), lineHeight: RS.v(30) },
    h4: { fontSize: RS.v(20), lineHeight: RS.v(28) },
    subtitle1: { fontSize: RS.v(18), lineHeight: RS.v(26) },
    subtitle2: { fontSize: RS.v(14), lineHeight: RS.v(20) },
    body1: { fontSize: RS.v(16), lineHeight: RS.v(24) },
    body2: { fontSize: RS.v(14), lineHeight: RS.v(22) },
    body3: { fontSize: RS.v(12), lineHeight: RS.v(16) },
    label1: { fontSize: RS.v(20), lineHeight: RS.v(28) },
    label2: { fontSize: RS.v(16), lineHeight: RS.v(20) },
    button: { fontSize: RS.v(16), lineHeight: RS.v(24) },
    capital: { fontSize: RS.v(10), lineHeight: RS.v(14) },
  },
})
