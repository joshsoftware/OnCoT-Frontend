import { FINISH_TEST } from 'constants/actionConstants';

export const finishTestRequest = (data) => ({
  type: FINISH_TEST.FINISH_TEST_REQUEST,
  payload: { ...data },
});

export const finishTestSuccessAction = (payload) => ({
  type: FINISH_TEST.SET_FINISH_DETAILS,
  payload,
});

export const finishTestRequestFailed = (requestError) => ({
  type: FINISH_TEST.SET_FINISH_ERROR_MESSAGE,
  payload: requestError,
});
