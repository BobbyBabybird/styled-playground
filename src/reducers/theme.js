export const TOGGLE_THEME = 'TOGGLE_THEME'

const initialState = {
  currentTheme: {
    mode: 'light',
    size: 'huge'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        currentTheme: state.currentTheme === initialState.currentTheme ? {mode: 'dark', size: 'small'} : initialState.currentTheme
      }
    default:
      return state
  }
}
