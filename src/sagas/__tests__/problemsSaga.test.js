import { call, put } from 'redux-saga/effects';

import { statementSaga } from 'sagas/problemsSaga';
import {
  statementAction,
  statementRequest,
  statementActionFailed,
} from 'actions/problemStatementActions';
import { getStatement } from 'apis/problemStatementApi';

describe('Rules Saga', () => {
  let gen;
  const response =
  {
    data: {
      data: {
        created_at: '2021-03-08T07:47:39.018Z',
        created_by_id: 1,
        description: 'Description of pr 1',
        id: 1,
        organization_id: 1,
        submission_count: null,
        title: 'problem p1',
        updated_at: '2021-03-08T07:47:39.018Z',
        updated_by_id: 1,
      },
    },
  };
  const driveId = 1;
  const errorMessage = 'Error Message';
  beforeEach(() => {
    gen = statementSaga(statementRequest(driveId));
  });

  it('API call should be successful', () => {
    expect(gen.next().value).toEqual(call(getStatement, driveId));
  });

  it('Dispactch success action', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(
      put(statementAction(response.data.data)),
    );
    expect(gen.next().done).toEqual(true);
  });

  it('Dispatch failure action', () => {
    gen.next();
    expect(gen.throw(errorMessage).value)
      .toEqual(put(statementActionFailed()));
  });
});
