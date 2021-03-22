import { call, put, takeLatest } from 'redux-saga/effects';

import { getStatement } from 'apis/problemStatementApi';
import {
  statementAction,
  statementActionFailed,
} from 'actions/problemStatementActions';
import { PROBLEM_STATEMENT } from 'constants/actionConstants';
import local from 'utils/local';

// Problem statememt Saga
export function* statementSaga(action) {
  try {
    const response = yield call(getStatement, action.payload.driveId);
    yield put(statementAction(response.data.data));
    const { submission_count } = response.data.data;
    local.setItem('submissionCount', submission_count);
  } catch (error) {
    yield put(statementActionFailed(error.message));
  }
}

// watcherSaga
export default function* statementRequestSaga() {
  yield takeLatest(PROBLEM_STATEMENT.DETAILS_REQUEST, statementSaga);
}
