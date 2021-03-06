import { call, takeLatest, put } from 'redux-saga/effects';

import { LANGUAGE } from 'constants/actionConstants';
import fetchLanguages from 'apis/languagesApis';
import { showErrorMessage } from 'actions/userDriveActions';
import { setLanguages } from 'actions/languageAction';

// worker saga
export function* languageDetails(action) {
  try {
    const { data } = yield call(fetchLanguages);
    yield put(setLanguages(data));
  } catch (err) {
    yield put(showErrorMessage(err.message));
  }
}

// watcher saga
export default function* languageSagas() {
  yield takeLatest(LANGUAGE.FETCH_ACTION, languageDetails);
}
