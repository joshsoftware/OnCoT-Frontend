import produce from 'immer';
import { FINISH_TEST } from 'constants/actionConstants';

export const initialState = {
  errorMessage: '',
  isError: false,
  score:null,
  testTime:'',
  isLoading: false,
};

const finishTestReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FINISH_TEST.SET_FINISH_DETAILS:
      state.score = payload.score;
      state.testTime = payload.test_time;
      state.isLoading = false;
      break;
    case FINISH_TEST.SET_FINISH_ERROR_MESSAGE:
      state.errorMessage = payload;
      state.isError = true;
      state.isLoading = false;
      break;
    case FINISH_TEST.FINISH_TEST_REQUEST:
      state.isLoading = true;
      break;
    default:
      return state;
  }
});

export default finishTestReducer;
