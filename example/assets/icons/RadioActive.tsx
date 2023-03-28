import * as React from 'react'

import Svg, { SvgProps, Path } from 'react-native-svg'
const SvgRadioActive = (props: SvgProps) => (
  <Svg {...props} viewBox='0 0 16 16' fill='none' stroke='none'>
    <Path d='M13.333 8A5.333 5.333 0 1 1 2.666 8a5.333 5.333 0 0 1 10.667 0Z' fill='currentColor' />
    <Path d='M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z' stroke='currentColor' />
  </Svg>
)
export default SvgRadioActive
