import { call, put, takeLatest } from 'redux-saga/effects';
import { codeSubmissionPostApi } from 'apis/codeSubmissionApi';
import { CODE_SUBMISSION } from 'constants/actionConstants';
import {
  submitAction,
  submitRequestFailed,
} from 'actions/codeSubmissionActions';

export function* codeSubmissionSaga(action) {
  const { code, languageId, id, submissionCount, candidateId } = action.payload;

  const data = {
    source_code:code,
    language_id:languageId,
    id,
    submission_count:submissionCount,
    candidate_id:candidateId,
  };

  try {
    const response = yield call(codeSubmissionPostApi, data);
    yield put(submitAction(response.data));
  } catch (error) {
    yield put(submitRequestFailed(error.message));
  }
}

// watcher saga
export default function* submitSaga() {
  yield takeLatest(CODE_SUBMISSION.CODE_SUBMISSION_REQUEST, codeSubmissionSaga);
}
