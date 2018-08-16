import React from 'react'
import renderer from 'react-test-renderer'
import Button from './index'
import { ThemeProvider } from 'styled-components'
import { shallow } from 'enzyme'
import 'jest-styled-components'

test('<Button /> applies default styles', () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toHaveStyleRule('cursor', 'pointer')
  expect(tree).toHaveStyleRule('overflow', 'hidden')
  expect(tree).toHaveStyleRule('border', '0')
  expect(tree).toHaveStyleRule('position', 'relative')
  expect(tree).toHaveStyleRule('border-radius', '9999px')
})

test('<Button /> applies Light theme styles', () => {
  const theme = {
    mode: 'light',
    size: 'huge'
  }
  const shallowWithTheme = (tree, theme) => {
    const context = shallow(<ThemeProvider theme={theme} />)
      .instance()
      .getChildContext()

    return shallow(tree, { context })
  }
  const wrapper = shallowWithTheme(<Button />, theme)
  expect(wrapper).toHaveStyleRule('background-color', 'paleturquoise')
  expect(wrapper).toHaveStyleRule('color', 'snow')
})

test('<Button /> applies Dark theme styles', () => {
  const theme = {
    mode: 'dark',
    size: 'huge'
  }
  const shallowWithTheme = (tree, theme) => {
    const context = shallow(<ThemeProvider theme={theme} />)
      .instance()
      .getChildContext()

    return shallow(tree, { context })
  }
  const wrapper = shallowWithTheme(<Button />, theme)
  expect(wrapper).toHaveStyleRule('background-color', 'cornflowerblue')
  expect(wrapper).toHaveStyleRule('color', 'snow')
})

test('<Button /> applies variant Primary Light theme styles', () => {
  const theme = {
    mode: 'light',
    size: 'huge'
  }
  const shallowWithTheme = (tree, theme) => {
    const context = shallow(<ThemeProvider theme={theme} />)
      .instance()
      .getChildContext()

    return shallow(tree, { context })
  }
  const wrapper = shallowWithTheme(<Button variant="primary" />, theme)
  expect(wrapper).toHaveStyleRule('background-color', 'violet')
  expect(wrapper).toHaveStyleRule('color', 'snow')
})

// test('<Button /> will add rippleEffect.span on click', () => {
//
//   const wrapper = shallow(<Button />)
//   const render = wrapper.dive()
//   const button = wrapper.find('styled.button').at(0)
//   console.log(render);
//   render.simulate('click', { preventDefault() {} })
//
//   expect(wrapper.state().rippleList.toHaveLength(1))
//
// })
