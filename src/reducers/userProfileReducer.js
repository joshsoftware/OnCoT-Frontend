import produce from 'immer';

import { USER } from 'constants/actionConstants';

export const initialState = {
  data: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    role: '',
  },
  authToken: localStorage.getItem('authToken') || '',
};

const userProfileReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case USER.SET_DETAILS:
      state.data = action.payload;
      break;
    default:
      return state;
  }
});

export default userProfileReducer;
