export const TOGGLE_THEME = 'theme/TOGGLE_THEME'
export const TOGGLE_MODE = 'theme/TOGGLE_MODE'
export const TOGGLE_SIZE = 'theme/TOGGLE_SIZE'

const initialState = {
  currentTheme: {
    mode: 'light',
    size: 'huge'
  }
}
// TODO: Fox TOGGLE_THEME to toggle depending on current setting
//

const reducer = (state = initialState, action) => {
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

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME
  }
}

export const toggleMode = () => {
  return {
    type: TOGGLE_MODE
  }
}

export const toggleSize = () => {
  return {
    type: TOGGLE_SIZE
  }
}

export default reducer
