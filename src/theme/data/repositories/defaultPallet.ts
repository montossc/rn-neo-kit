import type { Pallet } from '../models/color.type'

export const defaultPallet: Pallet = {
  light: {
    primary: '#BEF9C3',
    secondary: '#CFFCEC',
    accent: '#01B695',
    button: {
      pressed: '#6FD197',
      disabled: '#E8F9F0',
    },
    text: {
      primary: '#0A0A0A',
      secondary: '#FFFFFF',
      feature: '#015D67',
      disabled: '#B3CED1',
      description: '#616161',
    },
    border: {
      primary: '#B3CED1',
      disabled: '#B3CED1',
    },
    toggle: {
      inactive: '#99BEC2',
      disabledInactive: '#EBEBEB',
      active: '#57F4BB',
    },
    input: {
      border: '#C2C2C2',
    },
    background: '#FFFFFF',
    divider: '#E7F2FF',
    error: '#FF4D4F',
    success: '#52C41A',
    warning: '#FF7A45',
    skeleton: '#B3CED1',
  },
}
