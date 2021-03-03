import { TIMER } from 'constants/actionConstants';

export const initialState = {
  counter: -1,
  requestError: '',
};

const TimerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TIMER.SET_TIMER:
      return { ...state, counter: payload.counter };
    case TIMER.UPDATE_TIMER:
      return { ...state, counter: payload.counter };
    case TIMER.SET_TIMER_ERROR:
      return { ...state, requestError: payload.requestError };
    default:
      return state;
  }
};

export default TimerReducer;
