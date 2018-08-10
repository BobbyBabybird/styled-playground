import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { generator } from 'uigradients';

const appBoxStyleType = theme('mode', {
  light: css`
    ${generator({gradient: 'sea_weed', angle: 0})}
  `,
  dark: css`
    ${generator({gradient: 'ash', angle: 0})}
  `
})

export const AppBox = styled.div`
  padding: 2rem 0;
  min-height: 100vh;
  ${appBoxStyleType}
`

const Box = styled.div`
  background-color: transparent;
  ${ props => props.padding && css`
    padding: 2rem 0;
  `}
  ${ props => props.center && css`
    text-align: center;
  `}
`
export default Box
