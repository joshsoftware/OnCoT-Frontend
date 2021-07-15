import codeBackupReducer, { initialState } from "reducers/codeBackupReducer";
import { backupCodeAction, backupCodeFailed } from "actions/codeBackupAction";

describe('Rules Reducer', () => {

  let state = {
    backupCode: {
      "id": 2,
      "answer": "hey man",
      "lang_code": 71,
      "problem_id": 2,
      "token": "b9f06a1492bb5b4894abdce1dd057e7b672703e1",
      "submission_count_left": 2,
    },
    errorMessage: "",
    isError: false,
  };
  const errorMessage = 'Backup Code fetching failed, Please try again!'
  it('Return Default State', () => {
    expect(codeBackupReducer(initialState, {})).toEqual(initialState);
  });

  it('check success request', () => {
    expect(codeBackupReducer(initialState,backupCodeAction(state.backupCode))).toEqual(state);
  })

  it('check error while fetching', () => {
    expect(codeBackupReducer(initialState,backupCodeFailed(errorMessage))).toEqual({...initialState, isError: true, errorMessage: errorMessage});
  })
})