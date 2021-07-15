import { call, put } from 'redux-saga/effects';

import { driveResultSaga } from 'redux/admin/driveResult/saga';
import { driveResultSuccessAction, driveResultFailureAction } from 'redux/admin/driveResult/action';

import { driveResultGetApi } from 'redux/admin/driveResult/api';

describe('Drive Result Saga-Admin', () => {
  let gen;
  const data = {
    title:'Lorem Ipsum dolor sit amet',
    description:'Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet',
  };
  const response = {
    data: {
      data: {
        message: 'Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet',
      },
    }
  };
  const errorMessage = 'Error Message 404';

  beforeEach(() => {
    const action = { payload:data };
    gen = driveResultSaga(action);
  });

  it('API call should be successful', () => {
    expect(gen.next().value).toEqual(call(driveResultGetApi, data ));
  });

  it('Dispactch success action', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(put(
      driveResultSuccessAction(response.data.data),
    ));
    expect(gen.next().done).toEqual(true);
  });

  it('Dispatch failure action', () => {
    gen.next();
    expect(gen.throw(errorMessage).value).toEqual(put(driveResultFailureAction()));
  });
});
