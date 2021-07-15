import { call, put } from 'redux-saga/effects';

import { createProblemSaga } from 'redux/admin/createProblem/saga';
import {
  createProblemSuccessAction,
  createProblemFailureAction,
} from 'redux/admin/createProblem/action';
import { createProblemPostApi } from 'redux/admin/createProblem/api';

describe('Create Problem Saga-Admin', () => {
  let gen;
  const data = {
    title:'Lorem Ipsum dolor sit amet',
    description:'Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet',
  };
  const response = {
    data:{
      message:'Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet',
      data: {problem: {id: 1}}
    },
  };
  const responseOutput = {
    message:'Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet.Lorem Ipsum dolor sit amet',
    pid: 1
  }
  const errorMessage = 'Error Message 404';
  beforeEach(() => {
    const action = { payload:data };
    gen = createProblemSaga(action);
  });

  it('API call should be successful', () => {
    expect(gen.next().value).toEqual(call(createProblemPostApi, data));
  });

  it('Dispactch success action', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(put(
      createProblemSuccessAction(responseOutput),
    ));
    expect(gen.next().done).toEqual(true);
  });

  it('Dispatch failure action', () => {
    gen.next();
    expect(gen.throw(errorMessage).value).toEqual(put(createProblemFailureAction()));
  });
});
