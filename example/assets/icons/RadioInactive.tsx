import * as React from 'react'

import Svg, { SvgProps, Rect } from 'react-native-svg'
const SvgRadioInactive = (props: SvgProps) => (
  <Svg {...props} viewBox='0 0 16 16' fill='none' stroke='none'>
    <Rect x={0.5} y={0.5} width={15} height={15} rx={7.5} stroke='currentColor' />
  </Svg>
)
export default SvgRadioInactive
