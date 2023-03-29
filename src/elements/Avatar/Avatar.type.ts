import type { NeoImageProps } from 'rn-neo-kit'

export type AvatarProps = Omit<NeoImageProps, 'width' | 'height'> & {
  size: number
  title?: string
}
