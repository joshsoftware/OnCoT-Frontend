import { call, put } from 'redux-saga/effects';

import driveDetail from 'apis/userDriveApis';
import {
  driveDetailRequest,
  showErrorMessage,
  setUserDriveDetails,
} from 'actions/userDriveActions';
import { driveDetails } from 'sagas/userDriveSagas';

const response = {
  data: {
    data: {
      created_at: '2021-03-08T05:27:22.673Z',
      created_by_id: 1,
      description: 'Testing drive add 2021',
      duration: null,
      end_time: '2021-07-09T12:00:00.000Z',
      id: 1,
      name: 'Drive 2021',
      organization_id: 1,
      start_time: '2021-07-07T10:00:00.000Z',
      updated_at: '2021-03-08T05:27:22.673Z',
      updated_by_id: 1,
    },
  },
};

const error = 'failed';

describe('user drive saga', () => {
  let gen;
  let action;

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
      put(setUserDriveDetails, response.data),
    );
    expect(gen.next().done).toEqual(true);
  });

  it('must throw error', () => {
    gen.next();
    expect(gen.throw(error).value).toEqual(put(showErrorMessage()));
    expect(gen.next().done).toEqual(true);
  });
});
