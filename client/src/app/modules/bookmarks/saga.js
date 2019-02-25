import {all, takeLatest, call, takeEvery, put} from 'redux-saga/effects';
import {ADD_BOOKMARK, GET_BOOKMARKS_FULFILLED, GET_BOOKMARKS_REQUESTED} from './actions';
import RepoService from '../../services/RepoService';

export const bookmarksService = RepoService.instance;

export function * getBookmarks() {
  const bookmarks = yield call(bookmarksService.getBookmarks);

  if (!bookmarks) {
    return yield call(alert, "Failed to retrieve bookmarks");
  }

  yield put({type: GET_BOOKMARKS_FULFILLED, repos: bookmarks});
}

export function * addBookmark({repo}) {
  yield call(bookmarksService.createBookmark, repo);
  yield put({type: GET_BOOKMARKS_REQUESTED});
}

export default function * rootSaga () {
  yield all([
    takeLatest(GET_BOOKMARKS_REQUESTED, getBookmarks),
    takeEvery(ADD_BOOKMARK, addBookmark)
  ]);
}