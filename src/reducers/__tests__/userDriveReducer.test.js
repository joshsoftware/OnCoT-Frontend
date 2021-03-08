import userDriveReducer, { initialState } from 'reducers/userDriveReducer';
import {
  setUserDriveDetails,
  showErrorMessage,
  driveDetailRequest,
} from 'actions/userDriveActions';

describe('user drive reducer', () => {
  it('return default state', () => {
    expect(userDriveReducer(initialState, {})).toEqual(initialState);
  });

  it('set details', () => {
    const userObj = {
      data: {
        id: '1',
        name: 'kkwieer drive',
        startTime: '2021-02-22T06:40:45Z',
        endTime: '2021-02-22T08:40:45Z',
      },
    };
    expect(
      userDriveReducer(initialState, setUserDriveDetails(userObj.data)),
    ).toEqual({ ...initialState, ...userObj, isLoading: false });
  });

  it('set error message', () => {
    const errMsg = 'something went wrong';
    expect(userDriveReducer(initialState, showErrorMessage(errMsg))).toEqual({
      ...initialState,
      isError: true,
      errorMessage: errMsg,
      isLoading: false,
    });
  });

  it('set drive loading', () => {
    expect(userDriveReducer(initialState, driveDetailRequest())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });
});
