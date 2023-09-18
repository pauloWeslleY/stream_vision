import { type ThemeConfig, extendTheme } from '@chakra-ui/react'
import colors from './colors.ts'

//* Configuration Dark Mode on App
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: 'zinc.100',
        color: 'zinc.700',
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
  fonts: {
    Poppins: `'Poppins', sans-serif`,
  },
  colors,
})
