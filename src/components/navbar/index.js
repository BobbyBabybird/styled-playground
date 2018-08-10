import React, { Component } from 'react'
import styled from 'styled-components'
import { Title } from './title';

const NavbarWrapper = styled.nav`
  display: block;
  width: 100%;
`

export default class Navbar extends Component {
  render() {
    return <NavbarWrapper>
      <Title>Appname</Title>
    </NavbarWrapper>
  }
}
