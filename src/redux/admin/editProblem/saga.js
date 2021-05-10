import { call, put, takeLatest } from 'redux-saga/effects';

import {
  editProblemSuccessAction,
  editProblemFailureAction,
} from 'redux/admin/editProblem/action';
import { editProblemPutApi } from 'redux/admin/editProblem/api';
import { EDIT_PROBLEM } from 'redux/admin/editProblem/actionConstants';

// worker saga
export function* editProblemSaga(action) {
  const { title, description, submission_count, time_in_minutes } = action.payload;
  const data = {
    title,
    description,
    submission_count,
    time_in_minutes,
  };
  try {
    const response = yield call(editProblemPutApi, data);
    yield put(editProblemSuccessAction({
      message: response.data.message,
      pid: response.data.data.problem.id,
    }));
  } catch (error) {
    yield put(editProblemFailureAction(error.message));
  }
}

// watcherSaga
export default function* editProblemWatcherSaga() {
  yield takeLatest(EDIT_PROBLEM.EDIT_PROBLEM_REQUEST_ACTION, editProblemSaga);
}
