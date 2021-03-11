import { statementAction, statementActionFailed } from 'actions/problemStatementActions';
import problemStatementReducer, { initialState } from 'reducers/problemStatementReducer';

describe('Problem Statement Reducer', () => {
  const statement = {
    id: '1',
    title: 'Title',
    description: 'Problem Statement',
  };
  const errorMessage = 'Request Error 404';
  const isError = true;

  it('Return Default State', () => {
    expect(problemStatementReducer(initialState, {})).toEqual(initialState);
  });
  it('Set Problem Statement', () => {
    expect(problemStatementReducer(initialState, statementAction(statement)))
      .toEqual({ ...initialState, statement });
  });
  it('Request Failed', () => {
    expect(problemStatementReducer(initialState, statementActionFailed(errorMessage, isError)))
      .toEqual({ ...initialState, errorMessage, isError });
  });
});
