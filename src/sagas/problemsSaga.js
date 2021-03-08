import { call, put, takeLatest } from 'redux-saga/effects';

import { getStatement } from 'apis/problemStatementApi';
import {
  statementAction,
  statementActionFailed,
} from 'actions/problemStatementActions';
import { PROBLEM_STATEMENT } from 'constants/actionConstants';

// Problem statememt Saga
export function* statementSaga(action) {
  try {
    const response = yield call(getStatement, action.payload.driveId);
    yield put(statementAction(response.data));
  } catch (error) {
    yield put(statementActionFailed(true));
  }
}

// watcherSaga
export default function* statementRequestSaga() {
  yield takeLatest(PROBLEM_STATEMENT.DETAILS_REQUEST, statementSaga);
}
