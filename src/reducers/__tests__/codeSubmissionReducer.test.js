import { submitAction, submitRequestFailed } from 'actions/codeSubmissionActions';
import codeSubmissionReducer, { initialState } from 'reducers/codeSubmissionReducer';

describe('Code Submission Reducer', () => {
  const responsedata = {
    submissionAllowed: 3,
    testcasesPassed: 1,
    totalTestcases: 2,
  }
  const requestdata = {
      submission_count: 3,
      total_testcases: 2,
      passed_testcases: 1,
  };
  const errorMessage = 'Error 404';
  const isError = true;
  it('Return Default State', () => {
    expect(codeSubmissionReducer(initialState, {})).toEqual(initialState);
  });
  it('Set Details', () => {
    expect(codeSubmissionReducer(initialState, submitAction(requestdata)))
      .toEqual({ ...initialState, ...responsedata });
  });
  it('Request Failed', () => {
    expect(codeSubmissionReducer(initialState, submitRequestFailed(errorMessage, isError)))
      .toEqual({ ...initialState, errorMessage, isError });
  });
});
