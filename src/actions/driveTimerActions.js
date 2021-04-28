import { DRIVE_TIMER } from 'constants/actionConstants';

export const driveTimerRequest = (tokenId) => ({
  type: DRIVE_TIMER.DRIVE_TIMER_REQUEST,
  payload: tokenId,
});

export const driveTimerRequestFailed = (timerError) => ({
  type: DRIVE_TIMER.SET_DRIVE_TIMER_ERROR,
  payload: timerError,
});

export const driveTimerAction = (counter) => ({
  type: DRIVE_TIMER.SET_DRIVE_TIMER,
  payload: counter,
});

export const updateDriveTimer = (updatedVal) => ({
  type: DRIVE_TIMER.UPDATE_DRIVE_TIMER,
  payload: updatedVal,
});
