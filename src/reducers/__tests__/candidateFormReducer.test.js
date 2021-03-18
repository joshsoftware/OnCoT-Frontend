import produce from 'immer';
import candidateFormReducer, { initialState } from 'reducers/candidateFormReducer';
import {
  candidateFormRequestAction,
  candidateFormSuccessAction,
  candidateFormFailureAction,
} from 'actions/candidateFormActions';

test('candidateFormReducer Request', () => {
  const expectedRequest = candidateFormReducer(initialState, candidateFormRequestAction());
  const recievedRequest = produce(initialState, (draft) => { draft.state.loading = true; });
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
  const recievedSuccess = produce(initialState, (state) => {
    state.state.loading = false;
    state.state.error = false;
    state.state.nextPageAllowed = true;
    state.candidateInfo.fName = action.payload.fName;
    state.candidateInfo.lName = action.payload.lName;
    state.candidateInfo.email = action.payload.email;
    state.candidateInfo.mobile = action.payload.mobile;
    state.candidateInfo.isProfileComplete = action.payload.isProfileComplete;
    state.candidateInfo.updatedAt = action.payload.updatedAt;
    state.candidateInfo.createdAt = action.payload.createdAt;
  });
  expect(JSON.stringify(expectedSuccess)).toBe(JSON.stringify(recievedSuccess));
});

test('candidateFormReducer Failure', () => {
  const action = candidateFormFailureAction({
    error: 'Error occured',
  });
  const expectedFailure = candidateFormReducer(initialState, action);
  const recievedFaiure = produce(initialState, (state) => {
    state.state.loading = false;
    state.state.error = true;
    state.state.errorMsg = action.payload;
    state.state.nextPageAllowed = false;
  });
  expect(JSON.stringify(expectedFailure)).toBe(JSON.stringify(recievedFaiure));
});

test('candidateFormReducer Default', () => {
  const expected = candidateFormReducer(initialState, {});
  expect(expected).toBe(initialState);
});
