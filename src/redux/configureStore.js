import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rate/rate.reducer'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';

export default function configureStore() {

  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  return {
    ...createStore(rootReducer, applyMiddleware(...middlewares)),
    runSaga: sagaMiddleware.run,
  }
}
