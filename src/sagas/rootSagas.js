import { all } from 'redux-saga/effects';
import userSaga from 'sagas/rulesSaga';
import formSaga from 'sagas/formSaga';

export default function* rootSagas() {
  yield all([userSaga(), formSaga()]);
}
