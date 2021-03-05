import { rulesAction, rulesRequestFailed } from 'actions/rulesAction';
import rulesReducer, { initialState } from 'reducers/rulesReducer';

describe('Rules Reducer', () => {
  it('Return Default State', () => {
    expect(rulesReducer(initialState, {})).toEqual(initialState);
  });
  it('Set Rules', () => {
    const userlist = { data :'Lorem ipsum dolor sit amet' };
    expect(rulesReducer(initialState, rulesAction(userlist))).toEqual({ ...initialState, userlist });
  });
  it('Request Failed', () => {
    const requestError = 'request failed';
    expect(rulesReducer(initialState, rulesRequestFailed(requestError))).toEqual({ ...initialState, requestError });
  });
});
