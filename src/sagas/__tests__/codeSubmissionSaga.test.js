import { call, put } from 'redux-saga/effects';

import { codeSubmissionSaga } from 'sagas/codeSubmissionSaga';
import {
  submitRequest,
  submitAction,
  submitRequestFailed,
} from 'actions/codeSubmissionActions';
import codeSubmissionPostApi from 'apis/codeSubmissionApi';

describe('CodeSubmission Saga', () => {
  let gen;
  const response = {
    data: {
      data: {
        submissionAllowed: 2,
        testcasesPassed: 3,
        totalTestcases: 5,
      },
    },
  };
  const errorMessage = 'Error Message 404';
  const action = submitRequest({
    code: 'cout<<"hello"<<endl;↵cin>>n;',
    id: 1,
    languageSelected: { id: '76', name: 'C++ (Clang 7.0.1)' },
    submissionCount: 2,
  });

  beforeEach(() => {
    gen = codeSubmissionSaga(action);
  });

  it('API call should be successful', () => {
    expect(gen.next(action.payload).value).toEqual(call(codeSubmissionPostApi, action.payload));
  });

  it('Dispactch success action', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(put(submitAction(response.data)));
    expect(gen.next().done).toEqual(true);
  });

  it('Dispatch failure action', () => {
    gen.next();
    expect(gen.throw(errorMessage).value).toEqual(put(submitRequestFailed()));
  });
});
