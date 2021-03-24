import { FINISH_TEST } from 'constants/actionConstants';

export const finishTestRequest = (data) => ({
  type: FINISH_TEST.FINISH_TEST_REQUEST,
  payload: { ...data },
});

export const finishTestSuccessAction = (responsedata) => ({
  type: FINISH_TEST.SET_FINISH_DETAILS,
  payload: { ...responsedata },
});

export const finishTestRequestFailed = (requestError) => ({
  type: FINISH_TEST.SET_FINISH_ERROR_MESSAGE,
  payload: requestError,
});
