import { DRIVE_TIMER } from 'constants/actionConstants';

export const initialState = {
  counter: undefined,
  requestError: '',
};

const DriveTimerReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case DRIVE_TIMER.SET_DRIVE_TIMER:
      return { ...state, counter: payload };
    case DRIVE_TIMER.UPDATE_DRIVE_TIMER:
      return { ...state, counter: payload };
    case DRIVE_TIMER.SET_DRIVE_TIMER_ERROR:
      return { ...state, requestError: payload };
    default:
      return state;
  }
};

export default DriveTimerReducer;
