import {all, fork} from 'redux-saga/effects';
import bookmarksSaga from './modules/bookmarks/saga';

// combine all the module sagas
export default function * rootSaga() {
  console.log('kicking off root saga')
  yield all([
      fork(bookmarksSaga)
  ]);
}
