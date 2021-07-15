import produce from 'immer';

import { CODE_BACKUP } from 'constants/actionConstants';

export const initialState = {
  backupCode: {},
  errorMessage: '',
  isError: false,
};

const codeBackupReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CODE_BACKUP.FETCH_CODE_ACTION:
      return { ...initialState, backupCode: { ...payload } };
    case CODE_BACKUP.SET_ERROR_MESSAGE:
      return { ...state, isError: true, errorMessage: payload };
    default:
      return state;
  }
});

export default codeBackupReducer;
