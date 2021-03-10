import { RULES } from 'constants/actionConstants';

export const rulesRequest = (driveId) => ({
  type: RULES.DETAIL_REQUEST,
  payload: { driveId },
});

export const rulesRequestFailed = (requestError) => ({
  type: RULES.SET_ERROR_MESSAGE,
  payload: requestError,
});

export const rulesAction = (userlist) => ({
  type: RULES.SET_DETAILS,
  payload: { ...userlist },
});
