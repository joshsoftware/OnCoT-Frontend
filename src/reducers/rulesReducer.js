import produce from 'immer';

import { RULES } from 'constants/actionConstants';

export const initialState = {
  userlist : {},
  requestError: '',
};

const rulesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RULES.SET_DETAILS:
      return produce(state, (draft) => { draft.userlist = payload.userlist; });
    case RULES.SET_ERROR_MESSAGE:
      return produce(state, (draft) => { draft.requestError = payload; });
    default:
      return state;
  }
};

export default rulesReducer;
