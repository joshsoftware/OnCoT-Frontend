import { call, put, takeLatest } from 'redux-saga/effects';

import { rulesAction, rulesRequestFailed } from 'actions/rulesAction';
import { getRules } from 'apis/rulesApi';
import { RULES } from 'constants/actionConstants';

// worker saga
export function* rulesSaga(action) {
  try {
    const response = yield call(getRules, action.payload.driveId);
    yield put(rulesAction(response.data.data));
  } catch (error) {
    yield put(rulesRequestFailed(error.message));
  }
}

// watcherSaga
export default function* driveRulesSaga() {
  yield takeLatest(RULES.DETAIL_REQUEST, rulesSaga);
}
