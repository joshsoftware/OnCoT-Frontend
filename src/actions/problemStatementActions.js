import { PROBLEM_STATEMENT } from 'constants/actionConstants';

export const statementRequest = () => ({ type: PROBLEM_STATEMENT.DETAILS_REQUEST });

export const statementAction = (statement) => ({
  type: PROBLEM_STATEMENT.SET_DETAILS,
  payload: { statement },
});

export const statementActionFailed = (requestError) => ({
  type: PROBLEM_STATEMENT.SET_ERROR_MESSAGE,
  payload: { requestError },
});
