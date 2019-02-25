import {all, takeLatest, call, fork, put} from 'redux-saga/effects';
import {GET_BOOKMARKS_FULFILLED, GET_BOOKMARKS_REQUESTED} from './actions';
import RepoService from '../../services/RepoService';

const bookmarksService = RepoService.instance;

export function * getBookmarks() {
  const bookmarks = yield call(bookmarksService.getBookmarks);

  if (!bookmarks) {
    yield call(alert, "Failed to retrieve bookmarks");
  }

  yield put({type: GET_BOOKMARKS_FULFILLED, repos: bookmarks});
}

export default function * rootSaga () {
  yield all([
    takeLatest(GET_BOOKMARKS_REQUESTED, getBookmarks)
  ]);
}