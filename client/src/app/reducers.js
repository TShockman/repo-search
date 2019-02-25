// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import {NAME as BOOKMARKS_NAME} from'./modules/bookmarks/actions';
import bookmarksReducer from './modules/bookmarks/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  [BOOKMARKS_NAME]: bookmarksReducer
});