import styled from 'styled-components'
import theme from 'styled-theming'

const titleStyles = theme('mode', {
  light: 'snow',
  dark: 'cornflowerblue'
})

export const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Carter One', cursive;
  text-align: center;
  color: ${titleStyles};
`
