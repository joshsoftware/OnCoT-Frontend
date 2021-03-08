import { TIMER } from 'constants/actionConstants';

export const timerRequest = () => ({ type: TIMER.TIMER_REQUEST });

export const timerRequestFailed = (timerError) => ({
  type: TIMER.SET_TIMER_ERROR,
  payload: timerError,
});

export const timerAction = (counter) => ({
  type: TIMER.SET_TIMER,
  payload: counter,
});

export const updateTimer = (updatedVal) => ({
  type: TIMER.UPDATE_TIMER,
  payload: updatedVal,
});
