import { all } from 'redux-saga/effects';

import statementRequestSaga from 'sagas/problemsSaga';

export default function* rootSagas() {
  yield all([statementRequestSaga()]);
}
