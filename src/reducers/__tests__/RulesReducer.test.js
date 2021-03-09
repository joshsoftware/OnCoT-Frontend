import { rulesAction, rulesRequestFailed } from 'actions/rulesAction';
import rulesReducer, { initialState } from 'reducers/rulesReducer';

describe('Rules Reducer', () => {
  const userlist = {
    id: 1,
    title: 'campus',
    description: '1.Rule Number 1',
    createdBy: '12-21-12',
    updatedBy: '12-12-12',
  }
  it('Return Default State', () => {
    expect(rulesReducer(initialState, {})).toEqual(initialState);
  });
  it('Set Rules', () => {
    expect(rulesReducer(initialState, rulesAction(userlist))).toEqual({ ...initialState, userlist });
  });
  it('Request Failed', () => {
    const requestError = 'request failed';
    expect(rulesReducer(initialState, rulesRequestFailed(requestError))).toEqual({ ...initialState, requestError });
  });
});
