import { TIMER } from 'constants/actionConstants';

export const initialState = {
  counter: -1,
  requestError: '',
  isRendered: false,
};

const TimerReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case TIMER.SET_TIMER:
      return { ...state, counter: payload, isRendered: true };
    case TIMER.UPDATE_TIMER:
      return { ...state, counter: payload, isRendered: true };
    case TIMER.SET_TIMER_ERROR:
      return { ...state, requestError: payload };
    default:
      return state;
  }
};

export default TimerReducer;
