import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { responsiveStoreEnhancer } from 'redux-responsive'

import appReducer from '../reducers'

import rootSaga from '../sagas/characters'

const sagaMiddleware = createSagaMiddleware()

const app = combineReducers({appReducer})

const store = createStore(
  app,
  composeWithDevTools(
    responsiveStoreEnhancer,
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store
