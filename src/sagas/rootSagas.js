import { all, call, put, takeLatest } from 'redux-saga/effects';
import candidateInfoPostApi from 'apis/candidateFormApi';
import { CANDIDATE_FORM_ACTIONS } from 'constants/candidateFormConstants';
import { candidateFormSuccessAction, candidateFormFailureAction } from 'actions/candidateFormActions';

export function* candidateFormSaga(action) {
  try {
    const response = yield call(candidateInfoPostApi, action.payload);

    if ((response.status >= 200 && response.status < 300)) {
      const { data } = response.data;
      yield put(candidateFormSuccessAction(data));
    } else {
      throw response;
    }
  } catch (error) {
    yield put(candidateFormFailureAction(error));
  }
}

// watcher saga
export function* userSaga() {
  yield takeLatest(CANDIDATE_FORM_ACTIONS.CANDIDATE_REQUEST, candidateFormSaga);
}

export default function* rootSaga() {
  yield all([userSaga()]);
}
