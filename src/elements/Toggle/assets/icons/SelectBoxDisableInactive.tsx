import * as React from 'react'

import Svg, { SvgProps, Rect } from 'react-native-svg'
const SvgSelectBoxDisableInactive = (props: SvgProps) => (
  <Svg {...props} viewBox='0 0 16 16' fill='none' stroke='none'>
    <Rect x={0.5} y={0.5} width={15} height={15} rx={3.5} stroke='currentColor' />
  </Svg>
)
export default SvgSelectBoxDisableInactive
