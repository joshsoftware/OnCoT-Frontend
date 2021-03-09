import { RULES } from 'constants/actionConstants';

export const rulesRequest = () => ({ type: RULES.DETAIL_REQUEST });

export const rulesRequestFailed = (requestError) => ({
  type: RULES.SET_ERROR_MESSAGE,
  payload: requestError,
});

export const rulesAction = (userlist) => ({
  type: RULES.SET_DETAILS,
  payload: { userlist },
});
