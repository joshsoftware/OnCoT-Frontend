import { call, put, takeLatest } from 'redux-saga/effects';
import candidateInfoPostApi from 'apis/candidateFormApi';
import { CANDIDATE_FORM_ACTIONS } from 'constants/actionConstants';
import {
  candidateFormSuccessAction,
  candidateFormFailureAction,
} from 'actions/candidateFormActions';

export function* candidateFormSaga(action) {
  const { fName, lName, mobile, createdAt, updatedAt, token } = action.payload;

  const data =  {
    first_name: fName,
    last_name: lName,
    mobile_number: mobile,
    created_at: createdAt,
    updated_at: updatedAt,
  };

  try {
    const response = yield call(candidateInfoPostApi, data, token);
    const {
      id,
      email,
      first_name,
      last_name,
      mobile_number,
      is_profile_complete,
      created_at,
      updated_at,
    } = response.data.data;

    const userData = {
      email,
      fName: first_name,
      lName: last_name,
      mobile: mobile_number,
      createdAt: created_at,
      updatedAt: updated_at,
      isProfileComplete: (is_profile_complete === 'true'),
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
