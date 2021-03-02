import { TIMER } from "constants/actionConstants";

export const timerRequest = () => ({ type: TIMER.TIMER_REQUEST });

export const timerRequestFailed = (timerError) => {
    return {
        type: TIMER.SET_TIMER_ERROR,
        payload: {requestError: timerError}
    }
}

export const timerAction = (counter) => {
    return {
        type: TIMER.SET_TIMER,
        payload: {counter}
    }
}

export const updateTimer = (updatedVal) => {
    return {
        type: TIMER.UPDATE_TIMER,
        payload: {counter: updatedVal}
    }
}