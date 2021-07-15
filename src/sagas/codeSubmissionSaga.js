import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { codeSubmissionPostApi, codeSubmissionGetApi } from 'apis/codeSubmissionApi';
import { CODE_SUBMISSION } from 'constants/actionConstants';
import {
  submitAction,
  submitRequestFailed,
} from 'actions/codeSubmissionActions';
import local from 'utils/local';

export function* codeSubmissionStatusSaga(param) {
  let { status } = param;
  const { submission_id } = param;
  const response = yield call(codeSubmissionGetApi, submission_id);
  status = response.data.data.status;
  if (status === 'accepted') {
    yield put(submitAction(response.data.data));
  }
  if (status === 'processing') {
    yield delay(5000);
    yield call(codeSubmissionStatusSaga, { submission_id, status });
  }
}

export function* codeSubmissionSaga(action) {
  const { code, languageId, problemId, submissionAllowed, candidateId, driveID } = action.payload;
  const data = {
    source_code:code,
    language_id:languageId,
    id: problemId,
    submission_count:submissionAllowed,
    candidate_id:parseInt(candidateId, 10),
    drive_id:parseInt(driveID, 10),
    token: local.getItem('authToken'),
  };
  try {
    const response = yield call(codeSubmissionPostApi, data);
    yield call(codeSubmissionStatusSaga,
      { submission_id: response.data.data.submission_id,
        status: response.data.data.status });
  } catch (error) {
    yield put(submitRequestFailed('Submission Failed, Please try again!'));
  }
}

// watcher saga
export default function* submitSaga() {
  yield takeLatest(CODE_SUBMISSION.CODE_SUBMISSION_REQUEST, codeSubmissionSaga);
}
