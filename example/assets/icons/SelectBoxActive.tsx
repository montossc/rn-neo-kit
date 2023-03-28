import * as React from 'react'

import Svg, { SvgProps, Rect, Path } from 'react-native-svg'
const SvgSelectBoxActive = (props: SvgProps) => (
  <Svg {...props} viewBox='0 0 16 16' fill='none' stroke='none'>
    <Rect width={16} height={16} rx={4} fill='currentColor' />
    <Path d='m11.6 5-5.04 6L4.4 8.6' stroke={props.stroke} strokeLinecap='round' strokeLinejoin='round' />
  </Svg>
)
export default SvgSelectBoxActive
