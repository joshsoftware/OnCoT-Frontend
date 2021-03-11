import { TIMER } from 'constants/actionConstants';

export const initialState = {
  counter: -1,
  requestError: '',
};

const TimerReducer = (action, state = initialState) => {
  const { type, payload } = action;

  switch (type) {
    case TIMER.SET_TIMER:
      return { ...state, counter: payload };
    case TIMER.UPDATE_TIMER:
      return { ...state, counter: payload };
    case TIMER.SET_TIMER_ERROR:
      return { ...state, requestError: payload };
    default:
      return state;
  }
};

export default TimerReducer;
