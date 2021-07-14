import produce from 'immer';

import { CODE_BACKUP } from 'constants/actionConstants';

export const initialState = {
  backupCode: {},
  errorMessage: '',
  isError: false,
  isLoading: false,
};

const codeBackupReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CODE_BACKUP.FETCH_CODE_ACTION:
      state.backupCode = { ...payload };
      break;
    default:
      return state;
  }
});

export default codeBackupReducer;
