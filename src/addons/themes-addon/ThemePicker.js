import React from 'react'
import ThemePickerButton from './ThemePickerButton'
import addons from '@storybook/addons'

const theme = {
  mode: 'light',
  size: 'huge'
}

class ThemePicker extends React.Component {

  state = {
    theme: theme
  }

  channel = addons.getChannel()

  _setTheme = (evt) => {

    const { name, dataset } = evt.target

    this.setState((prevState) => ({
      theme: {
        ...prevState.theme,
        [dataset.type]: name
      }
    }), this._emitTheme)

  }

  _emitTheme = () => {
    this.channel.emit('storybook/themes/add_theme', this.state.theme)
  }

  render() {
    return (
      <div>
        <ThemePickerButton data-type="mode" name="light" onClick={this._setTheme}>Light mode</ThemePickerButton>
        <ThemePickerButton data-type="mode" name="dark" onClick={this._setTheme}>Dark mode</ThemePickerButton>
        <ThemePickerButton data-type="size" name="huge" onClick={this._setTheme}>Huge size</ThemePickerButton>
        <ThemePickerButton data-type="size" name="small" onClick={this._setTheme}>Small size</ThemePickerButton>
      </div>
    )
  }
}

export default ThemePicker
