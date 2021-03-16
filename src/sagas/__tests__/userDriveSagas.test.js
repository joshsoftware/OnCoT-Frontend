import { call, put } from 'redux-saga/effects';

import driveDetail from 'apis/userDriveApis';
import {
  driveDetailRequest,
  showErrorMessage,
  setUserDriveDetails,
} from 'actions/userDriveActions';
import { driveDetails } from 'sagas/userDriveSagas';

describe('user drive saga', () => {
  let gen;
  let action;

  const response = {
    data: {
      data: {
        id: 1,
        name: 'Drive 2021',
        start_time: '2021-07-07T10:00:00.000Z',
        end_time: '2021-07-09T12:00:00.000Z',
      },
    },
  };

  const error = 'failed';

  beforeEach(() => {
    action = driveDetailRequest('12345');
    gen = driveDetails(action);
  });

  it('must call api', () => {
    expect(gen.next().value).toEqual(call(driveDetail, action.payload.token));
  });

  it('must set drive details', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(
      put(setUserDriveDetails(response.data.data)),
    );
    expect(gen.next().done).toEqual(true);
  });

  it('must throw error', () => {
    gen.next();
    expect(gen.throw(error).value).toEqual(put(showErrorMessage()));
    expect(gen.next().done).toEqual(true);
  });
});
