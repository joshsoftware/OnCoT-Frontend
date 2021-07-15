import { createProblemSuccessAction, createProblemFailureAction } from 'redux/admin/createProblem/action';
import createProblemReducer, { initialState } from 'redux/admin/createProblem/reducer';

describe('Create Problem Reducer-Admin', () => {
  const message = 'Lorem Ipsum Dolor sit Amet';
  const isSuccess = true;
  const isError = true;
  const errorMessage = 'Error Message';
  const problem_id = 1;

  it('Return Default State', () => {
    expect(createProblemReducer(initialState, {})).toEqual(initialState);
  });
  it('Set Message', () => {
    expect(createProblemReducer(initialState, createProblemSuccessAction({message, isSuccess, pid: problem_id})))
      .toEqual({ ...initialState, message, isSuccess, problem_id });
  });
  it('Request Failed', () => {
    expect(createProblemReducer(initialState, createProblemFailureAction(errorMessage, isError)))
      .toEqual({ ...initialState, errorMessage, isError });
  });
});
