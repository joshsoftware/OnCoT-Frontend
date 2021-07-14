import { call, put, takeLatest } from 'redux-saga/effects';
import { codeBackupPostApi, codeBackupGetApi } from 'apis/codeBackupAPI';
import { CODE_BACKUP } from 'constants/actionConstants';
import local from 'utils/local';
import {
  backupCodeAction,
} from 'actions/codeBackupAction';
import { setSubmissionAllowed } from 'actions/codeSubmissionActions';

export function* fetchCodeBackup(action) {
  try {
    if (action.payload) {
      const response = yield call(codeBackupGetApi, local.getItem('authToken'), action.payload);
      yield put(backupCodeAction(response.data.data.code));
      if (response.data.data.code.submission_count_left !== undefined) {
        yield put(setSubmissionAllowed(response.data.data.code.submission_count_left));
      }
    }
  } catch (error) {
    // TODO: Handle Error condition
  }
}

export function* saveCodeBackup(action) {
  const { code, languageId, problemId } = action.payload;

  const data = {
    answer: code,
    language_id: languageId,
    problem_id: problemId,
    token: local.getItem('authToken'),
  };

  try {
    yield call(codeBackupPostApi, data);
  } catch (error) {
    // TODO: Handle Error Condition
  }
}

// watcher saga
export default function* saveCodeSaga() {
  yield takeLatest(CODE_BACKUP.SET_CODE, saveCodeBackup);
  yield takeLatest(CODE_BACKUP.FETCH_CODE_REQUEST, fetchCodeBackup);
}
