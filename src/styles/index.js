import { injectGlobal } from 'styled-components'
import { generator } from 'uigradients';
import styleNormalize from 'styled-normalize'

export const globalStyles = injectGlobal`
  ${styleNormalize}

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  *,*::before,*::after {
    box-sizing: inherit;
  }

  body {
    min-height: 100vh;
    font-family: 'Roboto Mono', monospace;
  }
`
