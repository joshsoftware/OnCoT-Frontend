import produce from 'immer';

import { RULES } from 'constants/actionConstants';

export const initialState = {
  userlist : {},
  errorMessage: '',
  isError: false,
};

const rulesReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RULES.SET_DETAILS:
      state.userlist = {
        id: payload.id,
        description: payload.description,
      };
      break;
    case RULES.SET_ERROR_MESSAGE:
      state.errorMessage = payload;
      state.isError = true;
      break;
    default:
      return state;
  }
});

export default rulesReducer;
