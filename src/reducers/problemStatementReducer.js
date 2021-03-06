import produce from 'immer';

import { PROBLEM_STATEMENT } from 'constants/actionConstants';

export const initialState = {
  statement : {},
  requestError : false,
};

const problemStatementReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROBLEM_STATEMENT.SET_DETAILS:
      return produce(state, (draft) => { draft.statement = payload.statement; });
    case PROBLEM_STATEMENT.SET_ERROR_MESSAGE:
      return produce(state, (draft) => { draft.requestError = payload; });
    default:
      return state;
  }
};

export default problemStatementReducer;
