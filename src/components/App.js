import React, { Component } from 'react'

class App extends Component {

  renderCharacters () {
    return Object.keys(this.props.characters).map(key => {
      const datum = this.props.characters[key];
      return (
        <div key={key}>
          <span>{datum.name}</span>
        </div>
      )
    })
  }

  render () {
    return this.renderCharacters()
  }
}

export default App
