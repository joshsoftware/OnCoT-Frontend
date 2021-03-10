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
  const recievedSuccess = produce(initialState, (draft) => {
    draft.state.loading = false;
    draft.state.error = false;
    draft.state.nextPageAllowed = true;
    draft.candidateInfo.fName = action.payload.fName;
    draft.candidateInfo.lName = action.payload.lName;
    draft.candidateInfo.email = action.payload.email;
    draft.candidateInfo.mobile = action.payload.mobile;
  });
  expect(JSON.stringify(expectedSuccess)).toBe(JSON.stringify(recievedSuccess));
});

test('candidateFormReducer Failure', () => {
  const action = candidateFormFailureAction({
    error: 'Error occured',
  });
  const expectedFailure = candidateFormReducer(initialState, action);
  const recievedFaiure = produce(initialState, (draft) => {
    draft.state.loading = false;
    draft.state.error = true;
    draft.state.errorMsg = action.payload;
    draft.state.nextPageAllowed = false;
  });
  expect(JSON.stringify(expectedFailure)).toBe(JSON.stringify(recievedFaiure));
});

test('candidateFormReducer Default', () => {
  const expected = candidateFormReducer(initialState, {});
  expect(expected).toBe(initialState);
});
