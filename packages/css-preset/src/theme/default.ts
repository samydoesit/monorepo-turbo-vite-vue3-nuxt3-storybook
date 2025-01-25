import type { Theme } from './types'
import { theme as windTheme } from '@unocss/preset-wind'
import { mergeDeep } from 'unocss'
import { colors } from './colors'
import { fontFamily, fontSize, lineHeight } from './font'

export const theme: Theme = mergeDeep(windTheme, {
  // preflightBase: {
  //   /* custom CSS vars */
  //   // '--testSam': 'lol'
  // },
  colors,
  fontFamily,
  fontSize,
  lineHeight,
})
