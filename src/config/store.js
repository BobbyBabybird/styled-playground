import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import appReducer from '../reducers'

import { fetchCharacters } from '../actions/characters'

const sagaMiddleware = createSagaMiddleware()

const app = combineReducers({appReducer})

const store = createStore(
  app,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(fetchCharacters)

export default store
