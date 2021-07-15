import { call, put } from 'redux-saga/effects';

import { fetchCodeBackup, saveCodeBackup } from 'sagas/codeBackupSaga';
import { codeBackupPostApi, codeBackupGetApi } from 'apis/codeBackupAPI';
import { backupCodeRequest, backupCodeAction, saveCode, backupCodeFailed } from 'actions/codeBackupAction';
import { setSubmissionAllowed } from 'actions/codeSubmissionActions';
import local from 'utils/local';

describe('CodeBackup Saga for fetch call', () => {
  let gen;
  const token = 'token123'
  const ProblemId = 1;
  const response = {
    data: {
      data: {
        code: {
          "id": 2,
          "answer": "hey man",
          "lang_code": 71,
          "problem_id": 2,
          "token": "b9f06a1492bb5b4894abdce1dd057e7b672703e1",
          "submission_count_left": 2,
        }
      }
    }
  };
  const errorMessage = 'Backup Code fetching failed, Please try again!';
  const action = backupCodeRequest(1);
  local.setItem('authToken', token);

  beforeEach(() => {
    gen = fetchCodeBackup(action);
  });

  it('API call should be successful', () => {
   expect(gen.next(action.payload).value).toEqual(call(codeBackupGetApi, token, ProblemId));
  });

  it('Dispactch success action', () => {
    gen.next();
    expect(gen.next(response).value).toEqual(put(backupCodeAction(response.data.data.code)));
  });

  it('set error message', () => {
    gen.next();
    expect(gen.throw(errorMessage).value).toEqual(put(backupCodeFailed(errorMessage)));
  });

});

describe('CodeBackup Saga for post call', () => {
  let gen;
  const response = {
    answer: {},
    language_id: 1,
    problem_id: 1,
    token: local.getItem('authToken'),
  };
  const action = saveCode({
    code: {},
    languageId: 1,
    problemId: 1,
  });
  const errorMessage = 'Backup Code saving failed, Please try again!';
  beforeEach(() => {
    gen = saveCodeBackup(action);
  });

  it('save backup API call should be successful', () => {
    expect(gen.next(response).value).toEqual(call(codeBackupPostApi, response));
  });

  it('set error message', () => {
    gen.next();
    expect(gen.throw(errorMessage).value).toEqual(put(backupCodeFailed(errorMessage)));
  });

})
