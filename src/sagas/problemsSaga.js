import { call, put, takeLatest } from 'redux-saga/effects';

import { getStatement } from 'apis/problemStatementApi';
import { statementAction, statementActionFailed } from 'actions/problemStatementActions';
import { PROBLEM_STATEMENT } from 'constants/actionConstants';

// Problem statememt Saga
export function* statementSaga() {
  try {
    const { data } = yield call(getStatement);
    yield put(statementAction(data));
  } catch (error) {
    yield put(statementActionFailed('Something Went Wrong'));
  }
}

// watcherSaga
export default function* statementRequestSaga() {
  yield takeLatest(PROBLEM_STATEMENT.DETAILS_REQUEST, statementSaga);
}
