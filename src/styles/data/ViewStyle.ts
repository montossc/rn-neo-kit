type InsetSymmetric = { horizontal?: number; vertical: number } | { horizontal: number; vertical?: number }
type InsetOnly = { top: number; bottom: number; left: number; right: number }

export type WidthOrHeight = { width: number; height?: number } | { width?: number; height: number }
export type Padding = number | InsetSymmetric | InsetOnly
export type Margin = number | InsetSymmetric | InsetOnly
