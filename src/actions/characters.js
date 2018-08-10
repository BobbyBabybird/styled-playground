export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS'

export const getCharacters = () => {
  return {
    type: FETCH_CHARACTERS
  }
}
