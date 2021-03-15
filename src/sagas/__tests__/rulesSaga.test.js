import { call, put } from 'redux-saga/effects';

import { rulesSaga } from 'sagas/rulesSaga';
import {
  rulesAction,
  rulesRequest,
  rulesRequestFailed,
} from 'actions/rulesAction';
import { getRules } from 'apis/rulesApi';

describe('Rules Saga', () => {
  let gen;
  const driveId = '1';
  const response =
  {
    data: {
      data: {
        created_at: '2021-03-08T12:52:06.794Z',
        description: '1. The contest is open to anyone with a knack for programming.',
        drive_id: 1,
        id: 1,
        type_name: 'campus',
        updated_at: '2021-03-08T12:52:06.794Z',
      },
    },
  };
  const errorMessage = 'Error Message 404';
  beforeEach(() => {
    gen = rulesSaga(rulesRequest(driveId));
  });

  it('API call should be successful', () => {
    expect(gen.next().value).toEqual(call(getRules, driveId));
  });

  it('Dispactch success action', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(put(rulesAction(response.data.data)));
    expect(gen.next().done).toEqual(true);
  });

  it('Dispatch failure action', () => {
    gen.next();
    expect(gen.throw(errorMessage).value).toEqual(put(rulesRequestFailed()));
  });
});
