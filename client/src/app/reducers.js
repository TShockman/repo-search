// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import {NAME as BOOKMARKS_NAME} from'./modules/bookmarks/actions';
import bookmarksReducer from './modules/bookmarks/reducer';

import {NAME as SEARCH_NAME} from'./modules/search/actions';
import searchReducer from './modules/search/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  [BOOKMARKS_NAME]: bookmarksReducer,
  [SEARCH_NAME]: searchReducer
});