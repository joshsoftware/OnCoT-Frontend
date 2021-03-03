import { RULES } from 'constants/actionConstants';

export const initialState = {
  userlist : {},
  requestError: '',
};

const rulesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RULES.SET_DETAILS:
      return { ...state, userlist: payload.userlist };
    case RULES.SET_ERROR_MESSAGE:
      return { ...state, requestError: payload };
    default:
      return state;
  }
};

export default rulesReducer;
