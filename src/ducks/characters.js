export const RECEIVE_CHARACTERS = 'characters/RECEIVE_CHARACTERS'
export const FETCH_CHARACTERS = 'characters/FETCH_CHARACTERS'

const initialState = {
  data: {},
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        loading: true,
        data: {}
      }
    case RECEIVE_CHARACTERS:
      return {
        ...state,
        loading: false,
        data: Object.assign({}, action.payload)
      }
    default:
      return state

  }
}

export const getCharacters = () => {
  return {
    type: FETCH_CHARACTERS
  }
}

export default reducer
