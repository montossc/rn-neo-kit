import type { SvgProps } from 'react-native-svg'

export { Avatar } from './Avatar/Avatar'
export { AvatarProps } from './Avatar/Avatar.type'
export { Badge } from './Badge/Badge'
export type { BadgeProps } from './Badge/Badge.type'
export * from './Box'
export { Divider } from './Divider/Divider'
export { DividerProps } from './Divider/Divider.type'
export { NeoButton } from './NeoButton/NeoButton'
export { ButtonType, ButtonSize } from './NeoButton/NeoButton.type'
export type { ButtonProps } from './NeoButton/NeoButton.type'
export { NeoImage } from './NeoImage/NeoImage'
export type { NeoImageProps } from './NeoImage/NeoImage.type'
export { NeoText } from './NeoText/NeoText'
export type { NeoTextProps } from './NeoText/NeoText.type'
export { Skeleton } from './Skeleton/Skeleton'
export type { SkeletonProps } from './Skeleton/Skeleton.type'
export * from './Toggle'
export * from './ContainerView'

export type CustomComponent<T> = (props: T) => JSX.Element
export type NeoIconType = ReturnType<CustomComponent<SvgProps>>
