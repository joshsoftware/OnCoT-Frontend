import { call, put } from 'redux-saga/effects';

import { codeSubmissionSaga, codeSubmissionStatusSaga } from 'sagas/codeSubmissionSaga';
import {
  submitRequest,
  submitAction,
  submitRequestFailed,
} from 'actions/codeSubmissionActions';
import { codeSubmissionPostApi } from 'apis/codeSubmissionApi';
import local from 'utils/local';

describe('CodeSubmission Saga', () => {
  let gen;
  const response = {
    data: {
      data: {
        submissionAllowed: 2,
        testcasesPassed: 3,
        totalTestcases: 5,
        submission_id: 1,
        status: 'accepted',
      },
    },
  };
  const errorMessage = 'Error Message 404';
  const action = submitRequest({
    code: 'cout<<"hello"<<endl;↵cin>>n;',
    problemId: 1,
    languageId: 76,
    languageSelected: { id: '76', name: 'C++ (Clang 7.0.1)' },
    submissionAllowed: 2,
    candidateId: 1,
    driveID: 1,
    token: 'abc',
  });

  local.setItem('authToken', 'abc');

  beforeEach(() => {
    gen = codeSubmissionSaga(action);
  });

  it('API call should be successful', () => {
    const data = {
      source_code:action.payload.code,
      language_id:action.payload.languageId,
      id: action.payload.problemId,
      submission_count:action.payload.submissionAllowed,
      candidate_id:parseInt(action.payload.candidateId, 10),
      drive_id:parseInt(action.payload.driveID, 10),
      token: action.payload.token,
    };
    expect(gen.next(action.payload).value).toEqual(call(codeSubmissionPostApi, data));
  });

  it('Dispactch success action', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(call(codeSubmissionStatusSaga, { submission_id: 1,
      status: 'accepted' }));
    expect(gen.next().done).toEqual(true);
  });

  it('Dispatch failure action', () => {
    gen.next();
    expect(gen.throw(errorMessage).value).toEqual(put(submitRequestFailed("Submission Failed, Please try again!")));
  });
});
