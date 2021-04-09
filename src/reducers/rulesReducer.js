import produce from 'immer';

import { RULES } from 'constants/actionConstants';

export const initialState = {
  userlist : [],
  errorMessage: '',
  isError: false,
  isLoading: false,
};

const rulesReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case RULES.SET_DETAILS:
      state.userlist = payload.rules;
      state.isLoading = false;
      break;
    case RULES.SET_ERROR_MESSAGE:
      state.errorMessage = payload;
      state.isError = true;
      state.isLoading = false;
      break;
    case RULES.DETAIL_REQUEST:
      state.isLoading = true;
      break;
    default:
      return state;
  }
});

export default rulesReducer;
