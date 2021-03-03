import {
  candidateFormReducer,
  initialState,
} from 'reducers/candidateFormReducer';

import {
  candidateFormRequestAction,
  candidateFormSuccessAction,
  candidateFormFailureAction,
} from 'actions/candidateFormActions';

test('candidateFormReducer Request', () => {
  const expectedRequest = candidateFormReducer(initialState, candidateFormRequestAction());
  const recievedRequest = { ...initialState, loading:true };
  expect(JSON.stringify(expectedRequest)).toBe(JSON.stringify(recievedRequest));
});

test('candidateFormReducer Success', () => {
  const action = candidateFormSuccessAction({
    fName: 'XYZ',
    lName: 'PQR',
    email: 'xyz@joshsoftware.com',
    mobile: '9479488833',
  });
  const expectedSuccess = candidateFormReducer(initialState, action);
  const recievedSuccess = {
    ...initialState,
    loading : false,
    error : false,
    fName : action.payload.fName,
    lName : action.payload.lName,
    email : action.payload.email,
    mobile : action.payload.mobile,
  };
  expect(JSON.stringify(expectedSuccess)).toBe(JSON.stringify(recievedSuccess));
});

test('candidateFormReducer Failure', () => {
  const action = candidateFormFailureAction({
    error: 'Error occured',
  });
  const expectedFailure = candidateFormReducer(initialState, action);
  const recievedFaiure = {
    ...initialState,
    loading : false,
    error : true,
    errorMsg : action.payload,
  };
  expect(JSON.stringify(expectedFailure)).toBe(JSON.stringify(recievedFaiure));
});

test('candidateFormReducer Default', () => {
  const expected = candidateFormReducer(initialState, {});
  expect(expected).toBe(initialState);
});
