import { call, put, takeLatest } from 'redux-saga/effects';
import candidateInfoPostApi from 'apis/candidateFormApi';
import { CANDIDATE_FORM_ACTIONS } from 'constants/actionConstants';
import {
  candidateFormSuccessAction,
  candidateFormFailureAction,
} from 'actions/candidateFormActions';

export function* candidateFormSaga(action) {
  try {
    const response = yield call(candidateInfoPostApi, action.payload);
    const { email, fName, lName, mobile } = response.data.data;
    const userData = {
      email,
      fName,
      lName,
      mobile,
    };
    yield put(candidateFormSuccessAction(userData));
  } catch (error) {
    yield put(candidateFormFailureAction(error));
  }
}

// watcher saga
export default function* formSaga() {
  yield takeLatest(CANDIDATE_FORM_ACTIONS.REQUEST_ACTION, candidateFormSaga);
}

// if (response.status >= 200 && response.status < 300) {

// } else {
//   throw response;
// }
