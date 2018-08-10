import React from 'react'
import { oneOf } from 'prop-types'
import styled, { css } from 'styled-components'
import theme from 'styled-theming'

const ButtonText = styled.span`
  position: relative;
  z-index: 2;
`

const buttonStylesType = theme.variants('mode', 'variant', {
  default: {
    light: css`
    background-color: paleturquoise;
    color: snow;
    ::after {
      background-color: thistle;
    }
  `, dark: css`
    background-color: cornflowerblue;
    color: snow;
    ::after {
      background-color: darkslategray;
    }
  `},
  primary: {
    light: css`
      background-color: violet;
      color: snow;
      ::after {
        background-color: darkslateblue;
      }
    `,
    dark: css`
      background-color: darkslateblue;
      color: snow;
      ::after {
        background-color: violet;
      }
    `
  },
  // TODO: Make objects light and dark
  success: {light: 'green', dark: 'darkseagreen'},
})

const buttonSizes = theme('size', {
  huge: css`
    padding: 1rem 2rem;
    font-size: 1.4rem;
  `,
  small: css`
    padding: 1rem 2rem;
    font-size: 1rem;
  `
})

const Button = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  position: relative;
  border-radius: 9999px;
  border: 0;
  overflow: hidden;
  font-family: 'Roboto Mono',monospace;
  :focus {
    outline: 0;
  }
  ::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    transition: width 150ms ease-out;
  }
  :hover::after {
    width: 100%;
  }
  ${ buttonStylesType }
  ${ buttonSizes }
`

Button.propTypes = {
  variant: oneOf(['default', 'primary', 'success'])
}

Button.defaultProps = {
  variant: 'default'
}

const ButtonWithText = (props) => <Button { ...props }><ButtonText>{ props.children }</ButtonText></Button>

export default ButtonWithText
