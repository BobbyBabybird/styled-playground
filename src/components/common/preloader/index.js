import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import theme from 'styled-theming'

const modeStyles = theme('mode', {
  light: css`
    border-color: paleturquoise;
  `,
  dark: css`
    border-color: cornflowerblue;
  `
})

const sizeStyles = theme('size', {
  huge: css`
    width: 64px;
    height: 64px;
  `,
  small: css`
    width: 48px;
    height: 48px;
  `
})

const rightSpin = keyframes`
  0% {
    transform: rotate(-130deg);
  }

  50% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(-130deg);
  }
`

const leftSpin = keyframes`
  0% {
    transform: rotate(130deg);
  }

  50% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(130deg);
  }
`

const layerSpin = keyframes`
  12.5% {
    transform: rotate(135deg);
  }

  25% {
    transform: rotate(270deg);
  }

  37.5% {
    transform: rotate(405deg);
  }

  50% {
    transform: rotate(540deg);
  }

  62.5% {
    transform: rotate(675deg);
  }

  75% {
    transform: rotate(810deg);
  }

  87.5% {
    transform: rotate(945deg);
  }

  100% {
    transform: rotate(1080deg);
  }
`

const wrapperSpin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const PreloaderWrapper = styled.div`
  text-align: center;
  position: relative;
  height: 64px;
  width: 64px;
  animation: ${ wrapperSpin } 1568ms linear infinite;
  display: inline-block;
  ${ modeStyles }
  ${ sizeStyles }
`

const SpinnerLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${ layerSpin } 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
  border-color: inherit;
`

const CircleClipper = styled.div`
  display: inline-block;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
`

const CircleClipperLeft = CircleClipper.extend`
  float: left;
`

const CircleClipperRight = CircleClipper.extend`
  float: right;
  ::after, ::before {
    box-sizing: border-box;
  }
`

const Circle = styled.div`
  width: 200%;
  height: 100%;
  border-width: 3px;
  border-style: solid;
  border-color: inherit;
  border-bottom-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
`

const CircleRight = Circle.extend`
  border-left-color: transparent;
  left: -100%;
  transform: rotate(-129deg);
  animation: ${ rightSpin } 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
`

const CircleLeft = Circle.extend`
  border-right-color: transparent;
  left: 0;
  transform: rotate(129deg);
  animation: ${ leftSpin } 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
`

const CircleGap = styled.div`
  width: 1000%;
  left: -450%;
  border-radius: 50%;
`

const GapPatch = styled.div`
  position: absolute;
  top: 0;
  left: 45%;
  width: 10%;
  height: 100%;
  overflow: hidden;
  border-color: inherit;
`

const Preloader = (props) => (
  <PreloaderWrapper loading={props}>

    <SpinnerLayer>

      <CircleClipperLeft>
        <CircleLeft></CircleLeft>
      </CircleClipperLeft>

      <GapPatch>
        <CircleGap />
      </GapPatch>

      <CircleClipperRight>
        <CircleRight></CircleRight>
      </CircleClipperRight>

    </SpinnerLayer>

  </PreloaderWrapper>
)

export default Preloader
