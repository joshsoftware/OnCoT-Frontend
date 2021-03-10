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
  let data;
  let token;
  let userData;

  const response = {
    data: {
      data: {
        email: 'aryanjn807@gmail.com',
        last_name: 'Jain',
        created_at: '21/02/2020, 15:35:35',
        first_name: 'Aryan',
        updated_at: '21/02/2020, 15:35:35',
        mobile_number: '9479488833',
        is_profile_complete: 'true',
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
      createdAt: '10/3/2021, 3:13:30 pm',
      updatedAt: '10/3/2021, 3:13:30 pm',
      token: 'testtoken12345',
    });
    gen = candidateFormSaga(action);
    const { fName, lName, mobile, createdAt, updatedAt } = action.payload;
    const { email, first_name, last_name, mobile_number,
      created_at, updated_at, is_profile_complete } = response.data.data;
    data =  {
      first_Name: fName,
      last_Name: lName,
      mobile_number: mobile,
      created_at: createdAt,
      updated_at: updatedAt,
    };
    userData = {
      fName: first_name,
      lName: last_name,
      email,
      mobile: mobile_number,
      createdAt: created_at,
      updatedAt: updated_at,
      isProfileComplete: (is_profile_complete === 'true'),
    };
    token = action.payload.token;
  });

  it('API call for REQUEST', () => {
    const expectedRequest = gen.next(data, token).value;
    const recievedRequest = call(candidateInfoPostApi, data, token);

    expect(JSON.stringify(expectedRequest)).toEqual(
      JSON.stringify(recievedRequest),
    );
  });

  it('API call for SUCCESS', () => {
    gen.next();
    const expectedRequest = gen.next(response).value;
    const recievedRequest = put(candidateFormSuccessAction(userData));

    expect(expectedRequest).toEqual(
      recievedRequest,
    );
  });

  it('API call for FAILURE', () => {
    gen.next();
    const expectedRequest = gen.throw(error).value;
    const recievedRequest = put(candidateFormFailureAction(error));

    expect(JSON.stringify(expectedRequest)).toBe(
      JSON.stringify(recievedRequest),
    );
  });
});
