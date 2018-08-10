import { TOGGLE_THEME } from './../actions/theme'
import { TOGGLE_MODE } from './../actions/theme'
import { TOGGLE_SIZE } from './../actions/theme'

const initialState = {
  currentTheme: {
    mode: 'light',
    size: 'huge'
  }
}
// TODO: Fox TOGGLE_THEME to toggle depending on current setting
//

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        currentTheme: state.currentTheme === initialState.currentTheme ? {mode: 'dark', size: 'small'} : initialState.currentTheme
      }
    case TOGGLE_MODE:
      return {
        ...state,
        currentTheme: {mode: state.currentTheme.mode === initialState.currentTheme.mode ? 'dark' : 'light', size: state.currentTheme.size }
      }
    case TOGGLE_SIZE:
      return {
        ...state,
        currentTheme: {mode: state.currentTheme.mode, size: state.currentTheme.size === initialState.currentTheme.size ? 'small' : 'huge' }
      }
    default:
      return state
  }
}
