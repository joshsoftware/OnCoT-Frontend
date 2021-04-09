import produce from 'immer';
import { CREATE_TESTCASE } from 'redux/admin/testCase/actionContants';

export const initialState = {
  testCaseMessage:'',
  isTestCaseSuccess:false,
  isTestCaseLoading:false,
  isTestCaseError:false,
  testCaseErrorMessage:'',
  reqCount:0,
};

const createTestCaseReducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TESTCASE.CREATE_TESTCASE_REQUEST_ACTION:
      state.reqCount += 1;
      state.isTestCaseLoading = true;
      break;
    case CREATE_TESTCASE.CREATE_TESTCASE_SUCCESS_ACTION:
      state.isTestCaseSuccess = true;
      state.isTestCaseLoading = false;
      state.testCaseMessage = payload.message;
      break;
    case CREATE_TESTCASE.CREATE_TESTCASE_FAILURE_ACTION:
      state.isTestCaseError = true;
      state.testCaseErrorMessage = payload.error;
      state.isTestCaseLoading = false;
      break;
    default:
      return state;
  }
});
export default createTestCaseReducer;
