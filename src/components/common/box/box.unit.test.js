import React from 'react'
import renderer from 'react-test-renderer'
import Box from './index'
import 'jest-styled-components'

test('<Box /> background color is correct', () => {
  const tree = renderer.create(<Box />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(tree).toHaveStyleRule('background-color', 'transparent')
})
