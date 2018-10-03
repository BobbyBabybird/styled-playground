import characters from './../ducks/characters'
import theme from './../ducks/theme'
import { combineReducers } from 'redux'
import { responsiveStateReducer } from 'redux-responsive'

const appReducer = combineReducers({
  characters,
  theme,
  browser: responsiveStateReducer
})

export default appReducer
