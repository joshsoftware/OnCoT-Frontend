import { CANDIDATE_LIST } from 'constants/actionConstants';

export const candidateList = () => ({
  type: CANDIDATE_LIST.GET_CANDIDATE_LIST,
  payload: { driveId },
});

export const rulesRequestFailed = (requestError) => ({
  type: CANDIDATE_LIST.SET_ERROR_MESSAGE,
  payload: requestError,
});

export const rulesAction = () => ({
  type: CANDIDATE_LIST.SET_DETAILS,
  payload: { ...userlist },
});

