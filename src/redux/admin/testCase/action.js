import { CREATE_TESTCASE } from './actionContants';

// create test cases actions
export const createTestCaseRequestAction = (payload) => ({
  type: CREATE_TESTCASE.CREATE_TESTCASE_REQUEST_ACTION,
  payload,
});

export const createTestCaseSuccessAction = (payload) => ({
  type: CREATE_TESTCASE.CREATE_TESTCASE_SUCCESS_ACTION,
  payload,
});

export const createTestCaseFailureAction = (payload) => ({
  type: CREATE_TESTCASE.CREATE_TESTCASE_FAILURE_ACTION,
  payload,
});
