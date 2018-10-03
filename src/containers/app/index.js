import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AppBox } from '../../components/common/box'
import Navbar from '../../components/navbar'
import Characters from '../characters'
import Button from '../../components/common/button'
import Box from '../../components/common/box'
import { MenuList, MenuListItem } from './../../components/common/menu'
import Burger from './../../components/common/menu/mobile'
import { ThemeProvider } from 'styled-components'
import { globalStyles } from '../../styles/index'
import {
  toggleTheme,
  toggleMode,
  toggleSize
} from '../../ducks/theme';


const App = props => (
  <ThemeProvider theme={props.theme}>
    <AppBox>
      <Box>
        {props.browser.greaterThan.small ?
          <MenuList>
            <MenuListItem current>Explore</MenuListItem>
            <MenuListItem>All Games</MenuListItem>
            <MenuListItem>Jackpot</MenuListItem>
          </MenuList> :
          <Burger />
        }
      </Box>
      <Navbar />
      <Characters />
      <Box center padding>
        <Button variant="primary" onClick={props.toggleTheme}>Toggle theme</Button>
        <Button onClick={props.toggleMode}>Toggle mode</Button>
        <Button onClick={props.toggleSize}>Toggle size</Button>
      </Box>
    </AppBox>
  </ThemeProvider>
)

const mapStateToProps = state => ({
  theme: state.appReducer.theme.currentTheme,
  browser: state.appReducer.browser
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleTheme,
      toggleMode,
      toggleSize
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(App)
