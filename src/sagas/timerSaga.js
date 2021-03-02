import { call, put, takeLatest } from "redux-saga/effects";
import { TIMER } from "constants/actionConstants";
import { getTimer } from "apis/timerAPI";
import { timerAction, timerRequestFailed } from "actions/timerActions";

export function* timerSaga() {
    try {
        const response = yield call(getTimer);
        yield put(timerAction(response.data))
    } catch(error) {
        yield put(timerRequestFailed('Something went wrong with timer!'))
    }
}

export default function* userSaga() {
    yield takeLatest(TIMER.TIMER_REQUEST, timerSaga);
}