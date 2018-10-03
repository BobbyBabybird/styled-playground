import React from 'react'
import styled from 'styled-components'

const Burger = styled.button`
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  &:focus {
    outline: none;
  }
`

const Line = styled.span`
  display: block;
  height: 3px;
  width: 20px;
  background-color: papayawhip;
  &:nth-child(2) {
    margin: 3px 0;
  }
`

const MobileMenu = () => (
  <Burger>
    <Line />
    <Line />
    <Line />
  </Burger>
)

export default MobileMenu
