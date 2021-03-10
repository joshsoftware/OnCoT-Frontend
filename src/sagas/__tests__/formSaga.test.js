import { call, put } from 'redux-saga/effects';

import {
  candidateFormRequestAction,
  candidateFormSuccessAction,
  candidateFormFailureAction,
} from 'actions/candidateFormActions';
import candidateInfoPostApi from 'apis/candidateFormApi';
import { candidateFormSaga } from 'sagas/formSaga';

describe('candidateFormSaga', () => {
  let gen;
  let action;

  const response = {
    data: {
      data: {
        email: 'aryanjn807@gmail.com',
        fName: 'Aryan',
        lName: 'Jain',
        mobile: '9479488833',
      },
    },
  };

  const error = {
    errorMessage: 'something went wrong',
  };

  beforeEach(() => {
    action = candidateFormRequestAction({
      fName: 'F',
      lName: 'L',
      mobile: '1234567890',
    });
    gen = candidateFormSaga(action);
  });

  it('API call for REQUEST', () => {
    const expectedRequest = gen.next().value;
    const recievedRequest = call(candidateInfoPostApi, action.payload);

    expect(JSON.stringify(expectedRequest)).toEqual(
      JSON.stringify(recievedRequest),
    );
  });

  it('API call for SUCCESS', () => {
    gen.next();

    const expectedRequest = gen.next(response).value;
    const recievedRequest = put(candidateFormSuccessAction(response.data.data));

    expect(expectedRequest).toEqual(
      recievedRequest,
    );
  });

  it('FAILURE action', () => {
    gen.next();
    const expectedRequest = gen.throw(error).value;
    const recievedRequest = put(candidateFormFailureAction(error));

    expect(JSON.stringify(expectedRequest)).toBe(
      JSON.stringify(recievedRequest),
    );
  });
});
