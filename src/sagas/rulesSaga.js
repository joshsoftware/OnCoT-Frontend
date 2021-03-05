import { call, put, takeLatest } from 'redux-saga/effects';

import { rulesAction, rulesRequestFailed } from 'actions/rulesAction';
import { getRules } from 'apis/rulesApi';
import { RULES } from 'constants/actionConstants';

// worker saga
export function* rulesSaga() {
  try {
    const response = yield call(getRules);
    yield put(rulesAction(response.data));
  } catch (error) {
    yield put(rulesRequestFailed(true));
  }
}

// watcherSaga
export default function* driveRulesSaga() {
  yield takeLatest(RULES.DETAIL_REQUEST, rulesSaga);
}
