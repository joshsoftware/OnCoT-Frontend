import { createProblemSuccessAction, createProblemFailureAction } from 'redux/admin/createProblem/action';
import createProblemReducer, { initialState } from 'redux/admin/createProblem/reducer';

describe('Create Problem Reducer-Admin', () => {
  const message = 'Lorem Ipsum Dolor sit Amet';
  const isSuccess = true;
  const isError = true;
  const errorMessage = 'Error Message';

  it('Return Default State', () => {
    expect(createProblemReducer(initialState, {})).toEqual(initialState);
  });
  it('Set Message', () => {
    expect(createProblemReducer(initialState, createProblemSuccessAction(message, isSuccess)))
      .toEqual({ ...initialState, message, isSuccess });
  });
  it('Request Failed', () => {
    expect(createProblemReducer(initialState, createProblemFailureAction(errorMessage, isError)))
      .toEqual({ ...initialState, errorMessage, isError });
  });
});
