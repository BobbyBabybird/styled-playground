import axios from 'axios'
import API_END_POINT from './../config/index'
import { RECEIVE_CHARACTERS, FETCH_CHARACTERS } from './../actions/characters'
import { call, put, takeEvery, all } from 'redux-saga/effects'

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

function *watchFetchCharacters () {
  yield takeEvery(FETCH_CHARACTERS, fetchCharacters)
}

export default function *rootSaga() {
  yield all([watchFetchCharacters()])
}
