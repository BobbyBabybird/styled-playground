import React from 'react'
import addons from '@storybook/addons'
import ThemePicker from './ThemePicker'

addons.register('storybook/themes', (api) => {
  addons.addPanel('storybook/themes/panel', {
    title: 'Themes',
    render: () => (
      <ThemePicker />
    )
  })
})
