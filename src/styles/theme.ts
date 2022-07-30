import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#FAF5FF', '#151E50')(props),
      color: mode('#4358CB', '#FAF5FF')(props)
    }
  })
}

const colors = {
  gray: {
    700: '#151E50;'
  }
}

const fonts = {
  heading: `'Oswald', sans-serif`,
  body: `'Oswald', sans-serif`
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ fonts, styles, config, colors })

export default theme
