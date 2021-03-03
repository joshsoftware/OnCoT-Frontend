import { all } from 'redux-saga/effects';
import headerSaga from 'sagas/timerSaga';

export default function* rootSaga() {
  yield all([headerSaga()]);
}
