export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'

const initialState = {}

const characters = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CHARACTERS:
      return Object.assign({}, action.payload)
    default:
      return state

  }
}

export default characters
