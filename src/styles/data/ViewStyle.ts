import type { MetricValue } from '../../utils'

type InsetSymmetric =
  | { horizontal?: MetricValue; vertical: MetricValue }
  | { horizontal: MetricValue; vertical?: MetricValue }
type InsetOnly = { top: MetricValue; bottom: MetricValue; left: MetricValue; right: MetricValue }

export type WidthOrHeight = { width: MetricValue; height?: MetricValue } | { width?: MetricValue; height: MetricValue }
export type Padding = MetricValue | InsetSymmetric | InsetOnly
export type Margin = MetricValue | InsetSymmetric | InsetOnly
