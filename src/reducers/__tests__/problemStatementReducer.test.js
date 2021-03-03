import { statementAction, statementActionFailed } from 'actions/problemStatementActions';
import problemStatementReducer, { initialState } from 'reducers/problemStatementReducer';

describe('Problem Statement Reducer', () => {
  it('Return Default State', () => {
    expect(problemStatementReducer(initialState, {})).toEqual(initialState);
  });
  it('Set Problem Statement', () => {
    const statement = { data :'Lorem ipsum dolor sit amet' };
    expect(problemStatementReducer(initialState, statementAction(statement))).toEqual({ ...initialState, statement });
  });
  it('Request Failed', () => {
    const requestError = 'request failed';
    expect(problemStatementReducer(initialState, statementActionFailed(requestError))).toEqual({ ...initialState, requestError });
  });
});
