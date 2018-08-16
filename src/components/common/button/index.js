import React from 'react'
import { oneOf } from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import theme from 'styled-theming'

const rippleLength = 1000

const ButtonText = styled.span`
  position: relative;
  z-index: 2;
  pointer-events: none;
`

const rippleEffect = keyframes`
  to {
    opacity: 0;
    transform: scale(2);
  }
`

const ClickEffect = styled.span`
  position        : absolute;
  top             : 0;
  left            : 0;
  right           : 0;
  bottom          : 0;
  display         : block;
  overflow        : hidden;
  border-radius   : 100%;
  pointer-events  : none;
  transform       : scale(0);
  opacity         : 0.75;
  background-color: white;
  z-index         : 3;
  animation       : ${ rippleEffect } ${rippleLength}ms ease-out;
`

const buttonStylesType = theme.variants('mode', 'variant', {
  default: {
    light: css`
    background-color: paleturquoise;
    color           : snow;
    ::after {
      background-color: thistle;
    }
  `, dark: css`
    background-color: cornflowerblue;
    color           : snow;
    ::after {
      background-color: darkslategray;
    }
  `},
  primary: {
    light: css`
      background-color: violet;
      color           : snow;
      ::after {
        background-color: darkslateblue;
      }
    `,
    dark: css`
      background-color: darkslateblue;
      color           : snow;
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
  cursor        : pointer;
  text-transform: uppercase;
  position      : relative;
  border-radius : 9999px;
  border        : 0;
  overflow      : hidden;
  font-family   : 'Roboto Mono',monospace;
  :focus {
    outline: 0;
  }
  ::after {
    content   : '';
    position  : absolute;
    display   : block;
    left      : 0;
    top       : 0;
    height    : 100%;
    width     : 0;
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

//const ButtonWithText = (props) => <Button { ...props }><ButtonText>{ props.children }</ButtonText><ClickEffect></ClickEffect></Button>

class ButtonWithText extends React.Component {

  state = {
    rippleStyle: {
      top   : null,
      left  : null,
      height: null,
      width : 0
    },
    rippleList: []
  }

  // componentDidMount () {
  //
  // }

  _onClick = (e) => {
    // TODO: Remove cllickeffect element after animationend.
    const
    size               = e.target.offsetWidth,
    pos                = e.target.getBoundingClientRect(),
    x                  = e.clientX - pos.left - (size / 2),
    y                  = e.clientY - pos.top - (size / 2),
    rippleStyle        = {}
    rippleStyle.top    = `${ y}px`
    rippleStyle.left   = `${ x}px`
    rippleStyle.height = `${ size}px`
    rippleStyle.width  = `${ size}px`

    this.setState({rippleStyle: rippleStyle})

    const { rippleList } = this.state

    const rand = Math.random()

    const rippleElement = <ClickEffect key={`ripple--${rand}`} style={rippleStyle} />

    this.setState({rippleList: rippleList.concat(rippleElement)}, () => this._removeRipple(rippleElement))
  }

  _removeRipple(elem) {
    setTimeout(() => {
      let { rippleList } = this.state,
      newRippleList = []

      newRippleList = rippleList.filter(e => e !== elem)
      this.setState({rippleList: newRippleList})
    }, rippleLength)
  }

  render () {
    return (
      <Button { ...this.props } onClick={this._onClick} >
        <ButtonText>{ this.props.children }</ButtonText>
        {
          this.state.rippleList
        }
      </Button>
    )
  }
}

export default ButtonWithText
