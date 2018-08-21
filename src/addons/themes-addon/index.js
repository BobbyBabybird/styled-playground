import React from 'react'
import addons from '@storybook/addons'
import { ThemeProvider } from 'styled-components'

const theme = {
  mode: 'light',
  size: 'huge'
}

export default class WithTheme extends React.Component {

  state = {
    theme: theme
  }

  channel = addons.getChannel()

  componentDidMount = () => {
    console.log(this.props);
    this.channel.on('storybook/themes/add_theme', (args) => this._toggleTheme(args))
  }

  _toggleTheme = (theme) => {
    this.setState({theme: theme})
  }

  render() {
    const { children, themes, channel} = this.props
    //this.channel.emit('storybook/themes/add_theme', themes)

    return (
      <ThemeProvider theme={this.state.theme}>
        { children }
      </ThemeProvider>
    )
  }
}
