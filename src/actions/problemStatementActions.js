import { PROBLEM_STATEMENT } from 'constants/actionConstants';

export const statementRequest = (driveId) => ({
  type: PROBLEM_STATEMENT.DETAILS_REQUEST,
  payload: { driveId },
});

export const statementAction = (statement) => ({
  type: PROBLEM_STATEMENT.SET_DETAILS,
  payload: { ...statement },
});

export const updateSubmissionCount = (updatedVal) => ({
  type: PROBLEM_STATEMENT.UPDATE_SUBMISSION_COUNT,
  payload: updatedVal,
});

export const statementActionFailed = (requestError) => ({
  type: PROBLEM_STATEMENT.SET_ERROR_MESSAGE,
  payload: requestError,
});
