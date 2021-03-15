import { call, put, takeLatest } from 'redux-saga/effects';
import codeSubmissionPostApi from 'apis/codeSubmissionApi';
import { CODE_SUBMISSION } from 'constants/actionConstants';
import {
  submitAction,
  submitRequestFailed,
} from 'actions/codeSubmissionActions';

export function* codeSubmissionSaga(action) {
  try {
    const response = yield call(codeSubmissionPostApi, action.payload);
    yield put(submitAction(response.data));
  } catch (error) {
    yield put(submitRequestFailed(error));
  }
}

// watcher saga
export default function* submitSaga() {
  yield takeLatest(CODE_SUBMISSION.CODE_SUBMISSION_REQUEST, codeSubmissionSaga);
}
