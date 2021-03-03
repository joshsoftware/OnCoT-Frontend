import { call, put } from 'redux-saga/effects';

import {
  candidateFormRequestAction,
  candidateFormSuccessAction,
  candidateFormFailureAction,
} from 'actions/candidateFormActions';
import candidateInfoPostApi from 'apis/candidateFormApi';
import { candidateFormSaga } from 'sagas/rootSagas';

describe('candidateFormSaga', () => {
  let gen; let
    action;

  const data = {
    email: 'aryanjn807@gmail.com',
    fName: 'Aryan',
    lName: 'Jain',
    mobile: '9479488833',
  };

  beforeEach(() => {
    action = candidateFormRequestAction({ fName:'F', lName:'L', mobile:'1234567890' });
    gen = candidateFormSaga(action);
  });

  it('API call for REQUEST', () => {
    const expectedRequest = gen.next().value;
    const recievedRequest = call(candidateInfoPostApi, action.payload);

    expect(JSON.stringify(expectedRequest)).toBe(JSON.stringify(recievedRequest));
  });

  it('FAILURE action', () => {
    const expectedRequest = gen.next().value;
    const recievedRequest = call(candidateInfoPostApi, action.payload);

    expect(JSON.stringify(expectedRequest)).toBe(JSON.stringify(recievedRequest));

    const expectedFailure = gen.next(data).value;
    const recievedFaiure = put(candidateFormFailureAction(data));

    expect(JSON.stringify(expectedFailure)).toBe(JSON.stringify(recievedFaiure));
  });
});
