import { PROBLEM_STATEMENT } from 'constants/actionConstants';

export const initialState = {
  statement : {},
  requestError : '',
};

const problemStatementReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROBLEM_STATEMENT.SET_DETAILS:
      return { ...state, statement: payload.statement };
    case PROBLEM_STATEMENT.SET_ERROR_MESSAGE:
      return { ...state, requestError:payload.requestError };
    default:
      return state;
  }
};

export default problemStatementReducer;
