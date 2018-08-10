import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  mode: 'light',
  size: 'huge'
}

export default ({children}) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
)
