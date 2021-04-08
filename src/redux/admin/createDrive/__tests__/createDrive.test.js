import { call, put } from 'redux-saga/effects';

import { createDriveSaga } from 'redux/admin/createDrive/saga';
import {
  createDriveRequestAction,
  createDriveSuccessAction,
  createDriveFailureAction,
} from 'redux/admin/createDrive/action';

import { createDrivePostApi } from 'redux/admin/createDrive/api';

import { CREATE_DRIVE } from 'redux/admin/createDrive/actionConstants';

describe('Create Drive', () => {
  let gen;
  const postData = {
    id: '',
    name: 'Josh 2021',
    description: 'Josh hiring 2021',
    start_time: '2021-04-06T10:20.000Z',
    end_time: '2021-04-06T13:20.000Z',
  };
  const wrongPostData = {
    id: '',
    name: 'Josh',
    description: 'Josh hiring',
    start_time: '2021-04-06T10:20.000Z',
    end_time: '2021-04-06T13:20.000Z',
  };
  const problemId = 6;

  const responseData = {
    data: {
      drive: {
        id: 19,
        name: 'Josh 2021',
        description: 'Josh hiring 2021',
        start_time: '2021-04-06T10:20.000Z',
        end_time: '2021-04-06T13:20.000Z',
        created_by_id: 2,
        updated_by_id: 2,
        organization_id: 1,
      },
    },
    message: 'Drive created successfully.',
  };
  beforeEach(() => {
    const action = { payload: { postData, problemId } };
    gen = createDriveSaga(action);
  });

  it('Create Drive successful', () => {
    expect(gen.next().value).toEqual(
      call(createDrivePostApi, postData, problemId),
    );
  });

  it('Create Drive unsuccessful', () => {
    expect(gen.next().value).not.toEqual(
      call(createDrivePostApi, wrongPostData, problemId),
    );
  });
});
