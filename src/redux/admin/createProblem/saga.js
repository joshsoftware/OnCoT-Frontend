import { call, put, takeLatest } from 'redux-saga/effects';

import {
  createProblemSuccessAction,
  createProblemFailureAction,
} from 'redux/admin/createProblem/action';
import { createProblemPostApi } from 'redux/admin/createProblem/api';
import { CREATE_PROBLEM } from 'redux/admin/createProblem/actionConstants';

// worker saga
export function* createProblemSaga(action) {
  const { title, description, submissionCount } = action.payload;
  const data = {
    title,
    description,
    submission_count:submissionCount,
  };
  try {
    const response = yield call(createProblemPostApi, data);
    yield put(createProblemSuccessAction({ message:response.data.message,
      pid: response.data.data.problem.id }));
  } catch (error) {
    yield put(createProblemFailureAction(error.message));
  }
}

// watcherSaga
export default function* problemWatcherSaga() {
  yield takeLatest(CREATE_PROBLEM.CREATE_PROBLEM_REQUEST_ACTION, createProblemSaga);
}
