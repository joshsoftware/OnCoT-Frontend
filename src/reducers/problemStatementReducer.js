import produce from 'immer';

import { PROBLEM_STATEMENT } from 'constants/actionConstants';

export const initialState = {
  statement: {},
  requestError: false,
};

const problemStatementReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROBLEM_STATEMENT.SET_DETAILS:
      state.statement = {
        id: payload.id,
        title: payload.title,
        description: payload.description,
        createdBy: payload.created_by_id,
        updatedBy: payload.updated_by_id,
      };
      break;
    case PROBLEM_STATEMENT.SET_ERROR_MESSAGE:
      state.requestError = payload;
      break;
    default:
      return state;
  }
});

export default problemStatementReducer;
