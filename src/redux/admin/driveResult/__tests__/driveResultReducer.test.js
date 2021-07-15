import { driveResultSuccessAction, driveResultFailureAction } from 'redux/admin/driveResult/action';
import driveResultReducer, { initialState } from 'redux/admin/driveResult/reducer';

describe('Dive Result Reducer-Admin', () => {
  const message = 'Lorem Ipsum Dolor sit Amet';
  const isSuccess = true;
  const isError = true;
  const errorMessage = 'Error Message';

  it('Return Default State', () => {
    expect(driveResultReducer(initialState, {})).toEqual(initialState);
  });
  // it('Set Message', () => {
  //   expect(driveResultReducer(initialState, driveResultSuccessAction(message, isSuccess)))
  //     .toEqual({ ...initialState, message, isSuccess });
  // });
  it('Request Failed', () => {
    expect(driveResultReducer(initialState, driveResultFailureAction(errorMessage , isError)))
      .toEqual({ ...initialState, errorMessage, isError });
  });
});
