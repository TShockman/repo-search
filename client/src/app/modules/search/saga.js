import {all, takeLatest, call, put, select} from 'redux-saga/effects';
import {SEARCH_FULFILLED, SEARCH_REQUESTED} from './actions';
import RepoService from '../../services/RepoService';
import {selectSearchState} from './selectors';

const repoService = RepoService.instance;

export function * search() {
  const {query} = yield select(selectSearchState);
  const searchResults = yield call(repoService.search, query);

  if (!searchResults) {
    return yield call(alert, "Failed to search");
  }

  yield put({type: SEARCH_FULFILLED, repos: searchResults});
}

export default function * rootSaga () {
  yield all([
    takeLatest(SEARCH_REQUESTED, search)
  ]);
}