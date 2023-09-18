import { ThemeConfig, extendTheme } from '@chakra-ui/react'
import colors from './colors.ts'

//* Configuration Dark Mode on App
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

export const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: 'whiteAlpha.100',
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
