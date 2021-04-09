import { call, put, takeEvery } from 'redux-saga/effects';
import { createTestCaseSuccessAction, createTestCaseFailureAction } from 'redux/admin/testCase/action';
import { postTestCaseApi } from 'redux/admin/testCase/api';
import { CREATE_TESTCASE } from 'redux/admin/testCase/actionContants';

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
