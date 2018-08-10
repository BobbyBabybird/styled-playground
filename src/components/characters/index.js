import React, { Component } from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'
import Preloader from './../common/preloader'
import Box from './../common/box'

const boxStuff = theme('mode', {
  light: '#999',
  dark: '#000'
})

const CharacterWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 10px;
`

const Character = styled.div`
  background-color: lightcyan;
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${boxStuff};
`

const CharacterName = styled.span`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`

const CharacterInfo = styled.span`
  font-size: 0.8rem;
  display: block;
`

class App extends Component {

  renderCharacters () {
    return Object.keys(this.props.characters).map(key => {
      const datum = this.props.characters[key];
      return (
        <Character key={key}>
          <CharacterName>{datum.name}</CharacterName>
          <CharacterInfo>Height: {datum.height}</CharacterInfo>
          <CharacterInfo>Weight: {datum.mass}</CharacterInfo>
          <CharacterInfo></CharacterInfo>
        </Character>
      )
    })
  }

  render () {
    return (
      <CharacterWrapper>
        {this.renderCharacters()}
        {
          this.props.loading &&
          <Box center padding>
            <Preloader loading={this.props.loading} />
          </Box>
        }
      </CharacterWrapper>
    )
  }
}

export default App
