import { CODE_BACKUP } from 'constants/actionConstants';

export const saveCode = (data) => ({
  type: CODE_BACKUP.SET_CODE,
  payload: { ...data },
});

export const backupCodeRequest = (problemId) => ({
  type: CODE_BACKUP.FETCH_CODE_REQUEST,
  payload: problemId,
});

export const backupCodeAction = (payload) => ({
  type: CODE_BACKUP.FETCH_CODE_ACTION,
  payload: { ...payload },
});

export const submitRequestFailed = (requestError) => ({
  type: CODE_BACKUP.SET_ERROR_MESSAGE,
  payload: requestError,
});
