import { all, call, delay, fork, put, take, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import { useSelector } from 'react-redux';
import { createTestCaseSuccessAction, createTestCaseFailureAction, updateTestCaseSuccessAction, updateTestCaseFailureAction } from './action';
import { getTestCasesApi, postTestCaseApi, updateTestCaseApi } from './api';
import { CREATE_TESTCASE, UPDATE_TESTCASE, DELETE_TESTCASE } from './actionContants';

export function* postTestCase(action) {
  // console.log(action);
  const { input, output, marks, problem_id } = action.payload;
  const data = {
    input,
    output,
    marks,
    problem_id,
  };
  try {
    // console.log(data, 'inside saga');
    const response = yield call(postTestCaseApi, data);
    console.log(response);
    yield put(createTestCaseSuccessAction({ message: response.message }));
  } catch (error) {
    console.log(error);
    yield put(createTestCaseFailureAction(error));
  }
}

export default function* testCaseWatcherSaga() {
  console.log('in testcaseWatcherSaga');
  yield takeEvery(CREATE_TESTCASE.CREATE_TESTCASE_REQUEST_ACTION, postTestCase);
}
