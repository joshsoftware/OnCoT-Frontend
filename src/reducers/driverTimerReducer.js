import { DRIVE_TIMER } from 'constants/actionConstants';

export const initialState = {
  counter: -1,
  requestError: '',
};

const DriveTimerReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case DRIVE_TIMER.SET_DRIVE_TIMER:
      return { ...state, counter: payload.data, isLive: payload.is_live };
    case DRIVE_TIMER.UPDATE_DRIVE_TIMER:
      return { ...state, counter: payload.data, isLive: payload.is_live };
    case DRIVE_TIMER.SET_DRIVE_TIMER_ERROR:
      return { ...state, requestError: payload.data };
    default:
      return state;
  }
};

export default DriveTimerReducer;
