import { call, put } from 'redux-saga/effects';

import { adminLoginSaga } from 'redux/admin/login/saga';
import { adminLoginSuccessAction, adminLoginFailureAction } from 'redux/admin/login/action';

import { adminLoginPostApi } from 'redux/admin/login/api';

describe('Login Saga-Admin', () => {
  let gen;
  const errorMessage = 'Error Message 404';
  const response = {
    data:{
      data:{
        email:'josh@gmail.com',
        first_name:'josh',
        last_name:'software',
      },
    },

  };
  const data = {
    emai:'josh@gmail.com',
    password:'Josh@111',
  };

  beforeEach(() => {
    const action = { payload:data };
    gen = adminLoginSaga(action);
  });

  it('API call should be successful', () => {
    expect(gen.next().value).toEqual(call(adminLoginPostApi, data));
  });

  it('Dispactch success action', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(put(
      adminLoginSuccessAction(response.data.data),
    ));
  });

  it('Dispatch failure action', () => {
    gen.next();
    expect(gen.throw(errorMessage).value).toEqual(put(adminLoginFailureAction()));
  });
});
