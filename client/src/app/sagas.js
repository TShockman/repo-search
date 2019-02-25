import {all, fork} from 'redux-saga/effects';
import bookmarksSaga from './modules/bookmarks/saga';
import searchSaga from './modules/search/saga';

// combine all the module sagas
export default function * rootSaga() {
  yield all([
      fork(bookmarksSaga),
      fork(searchSaga)
  ]);
}
