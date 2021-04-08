import { adminLoginFailureAction } from 'redux/admin/login/action';
import adminLoginReducer, { initialState } from 'redux/admin/login/reducer';

describe('Login Reducer-Admin', () => {
  const errorMessage = 'Error Message';
  const isError = true;

  it('Return Default State', () => {
    expect(adminLoginReducer(initialState, {})).toEqual(initialState);
  });

  it('Request Failed', () => {
    expect(adminLoginReducer(initialState, adminLoginFailureAction(errorMessage, isError)))
      .toEqual({ ...initialState, errorMessage, isError });
  });
});
