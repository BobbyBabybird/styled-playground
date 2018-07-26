import axios from 'axios'
import API_END_POINT from '../config/index'
import { RECEIVE_CHARACTERS } from '../reducers/characters'
import { call, put } from 'redux-saga/effects'

const getCharacters = () => axios.get(API_END_POINT)

function *fetchCharacters () {
  try {
    const response = yield call(getCharacters)
    yield put({
      type: RECEIVE_CHARACTERS,
      payload: response.data.results
    })
  } catch (e) {
    // TODO
    console.error(e)
  }
}

export {
  fetchCharacters
}
