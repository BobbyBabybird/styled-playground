import characters from './../ducks/characters'
import theme from './theme'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  characters,
  theme
})

export default appReducer
