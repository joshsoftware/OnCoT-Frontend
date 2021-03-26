import { call, put, takeLatest } from 'redux-saga/effects';
import { finishTestApi } from 'apis/finishTestApi';
import { FINISH_TEST } from 'constants/actionConstants';
import {
  finishTestSuccessAction,
  finishTestRequestFailed,
} from 'actions/finishTestActions';

export function* finishTestWorkerSaga(action) {
  const { id, candidateId } = action.payload;
  const finishtesRequestPayload = {
    id,
    candidate_id:  candidateId,
  };
  try {
    const response = yield call(finishTestApi, finishtesRequestPayload);
    yield put(finishTestSuccessAction(response.data));
  } catch (error) {
    yield put(finishTestRequestFailed(error.message));
  }
}

// watcher saga
export default function* finishTestSaga() {
  yield takeLatest(FINISH_TEST.FINISH_TEST_REQUEST, finishTestWorkerSaga);
}
