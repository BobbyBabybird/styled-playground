import { RECEIVE_CHARACTERS } from './../actions/characters'
import { FETCH_CHARACTERS } from './../actions/characters';

const initialState = {
  data: {},
  loading: false
}

const characters = (state = initialState, action) => {
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

export default characters
