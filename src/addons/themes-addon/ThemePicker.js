import React from 'react'
import ThemePickerButton from './ThemePickerButton'
import addons from '@storybook/addons'

const theme = {
  mode: 'light',
  size: 'huge'
}

const themeDark = {
  mode: 'dark',
  size: 'huge'
}

class ThemePicker extends React.Component {

  state = {
    theme: theme
  }

  channel = addons.getChannel()

  _setTheme = (evt) => {

    const { name } = evt.target

    switch (name) {
      case 'mode':
        this.state.theme.mode === 'dark' ? this.setState({theme: {mode: 'light', size: this.state.theme.size}}) : this.setState({theme: {mode: 'dark', size: this.state.theme.size}})
        break;
      case 'size':
        this.state.theme.size === 'huge' ? this.setState({theme: {mode: this.state.theme.mode, size: 'small'}}) : this.setState({theme: {mode: this.state.theme.mode, size: 'huge'}})
        break;
      default:

    }

    console.log('are we here before?');

    this.channel.emit('storybook/themes/add_theme', this.state.theme)
  }

  render() {
    return (
      <div>
        <ThemePickerButton name="mode" onClick={this._setTheme}>Toggle mode</ThemePickerButton>
        <ThemePickerButton name="size" onClick={this._setTheme}>Toggle size</ThemePickerButton>
      </div>
    )
  }
}

export default ThemePicker
