import { submitAction, submitRequestFailed } from 'actions/codeSubmissionActions';
import codeSubmissionReducer, { initialState } from 'reducers/codeSubmissionReducer';

describe('Code Submission Reducer', () => {
  const responsedata = {
    submissionAllowed: 2,
    testcasesPassed: 3,
    totalTestcases: 5,
  };
  const errorMessage = 'Error 404';
  const isError = true;
  it('Return Default State', () => {
    expect(codeSubmissionReducer(initialState, {})).toEqual(initialState);
  });
  it('Set Details', () => {
    expect(codeSubmissionReducer(initialState, submitAction(responsedata)))
      .toEqual({ ...initialState, responsedata });
  });
  it('Request Failed', () => {
    expect(codeSubmissionReducer(initialState, submitRequestFailed(errorMessage, isError)))
      .toEqual({ ...initialState, errorMessage, isError });
  });
});
