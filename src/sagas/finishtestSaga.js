import { call, put, takeLatest } from 'redux-saga/effects';
import { finishTestApi } from 'apis/finishTestApi';
import { FINISH_TEST } from 'constants/actionConstants';
import {
  finishTestSuccessAction,
  finishTestRequestFailed,
} from 'actions/finishTestActions';

export function* finishTestWorkerSaga(action) {
  try {
    const response = yield call(finishTestApi, action.payload);
    yield put(finishTestSuccessAction(response.data));
  } catch (error) {
    yield put(finishTestRequestFailed(error.message));
  }
}

// watcher saga
export default function* finishTestSaga() {
  yield takeLatest(FINISH_TEST.FINISH_TEST_REQUEST, finishTestWorkerSaga);
}
