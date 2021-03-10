import { rulesAction, rulesRequestFailed } from 'actions/rulesAction';
import rulesReducer, { initialState } from 'reducers/rulesReducer';

describe('Rules Reducer', () => {
  const userlist = {
    description: '1. The contest is open to anyone with a knack for programming.',
    id: 1,
  };
  const errorMessage = 'Error 404';
  const isError = true;
  it('Return Default State', () => {
    expect(rulesReducer(initialState, {})).toEqual(initialState);
  });
  it('Set Rules', () => {
    expect(rulesReducer(initialState, rulesAction(userlist)))
      .toEqual({ ...initialState, userlist });
  });
  it('Request Failed', () => {
    expect(rulesReducer(initialState, rulesRequestFailed(errorMessage, isError)))
      .toEqual({ ...initialState, errorMessage, isError });
  });
});
