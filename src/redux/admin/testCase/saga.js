import { call, put, takeEvery } from 'redux-saga/effects';
import { createTestCaseSuccessAction, createTestCaseFailureAction } from './action';
import { postTestCaseApi } from './api';
import { CREATE_TESTCASE } from './actionContants';

export function* postTestCase(action) {
  const { input, output, marks, problem_id } = action.payload;
  const data = {
    input,
    output,
    marks,
    problem_id,
  };
  try {
    const response = yield call(postTestCaseApi, data);
    yield put(createTestCaseSuccessAction({ message: response.message }));
  } catch (error) {
    yield put(createTestCaseFailureAction(error));
  }
}

export default function* testCaseWatcherSaga() {
  yield takeEvery(CREATE_TESTCASE.CREATE_TESTCASE_REQUEST_ACTION, postTestCase);
}
