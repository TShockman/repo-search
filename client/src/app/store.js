import { combineReducers, compose, createStore as createReduxStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history'

import createRootReducer from './reducers';
import createSagaMiddleware, {END} from 'redux-saga';
import rootSaga from './sagas';
import { routerMiddleware } from 'connected-react-router'

// create the redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

// create routing history
export const history = createBrowserHistory();

// create and return the redux store, combining router reducer with app reducers
// additionally, hook in redux-saga middleware
export function createStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createReduxStore(
      createRootReducer(history),
      composeEnhancers(
          applyMiddleware(
              routerMiddleware(history), // for dispatching history actions
              sagaMiddleware
          ),
      ),
  );

  // kick off redux-saga root
  sagaMiddleware.run(rootSaga);

  // dispatch END to close down store when the time comes
  store.close = () => store.dispatch(END);
  return store;
}