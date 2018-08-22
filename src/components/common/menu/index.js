import styled, { css } from 'styled-components'
import theme from 'styled-theming'

const color = theme('mode', {
  light: 'paleturquoise',
  dark: 'cornflowerblue'
})

const borderSize = theme('size', {
  small: '2px',
  huge: '3px'
})

const fontSize = theme('size', {
  small: '16px',
  huge: '20px'
})

export const MenuListItem = styled.li`
  padding: 1rem;
  display: block;
  position: relative;
  color: ${ color };
  font-size: ${ fontSize };

  &::after,
  &::before {
    content: '';
    height: ${ borderSize };
    width: ${ props => props.current ? '50%' : '0' };
    position: absolute;
    bottom: 0;
    transition: width 300ms ease-out;
    background-color: ${ color };
  }

  &::after {
    right: 50%;
  }

  &::before {
    left: 50%;
  }

  &:hover {
    &::after,
    &::before {
      width: 50%;
    }
  }
`

export const MenuList = styled.ul`
  display: flex;
  padding: 0;
`
