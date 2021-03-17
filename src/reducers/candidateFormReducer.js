import produce from 'immer';
import { CANDIDATE_FORM_ACTIONS } from 'constants/actionConstants';
import local from 'utils/local';
import { act } from 'react-dom/test-utils';

export const initialState = {
  state: {
    loading: false,
    error: false,
    errorMsg: '',
    nextPageAllowed: false,
  },
  candidateInfo: {
    fName: '',
    lName: '',
    mobile: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    isProfileComplete: false,
  },
  authToken: local.getItem('authToken') || '',
};

const candidateFormReducer = produce((state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CANDIDATE_FORM_ACTIONS.REQUEST_ACTION:
      state.state.loading = true;
      break;

    case CANDIDATE_FORM_ACTIONS.SUCCESS_ACTION:
      state.state.loading = false;
      state.state.error = false;
      state.state.nextPageAllowed = true;
      state.candidateInfo.fName = payload.fName;
      state.candidateInfo.lName = payload.lName;
      state.candidateInfo.email = payload.email;
      state.candidateInfo.mobile = payload.mobile;
      state.candidateInfo.isProfileComplete = payload.isProfileComplete;
      state.candidateInfo.updatedAt = payload.updatedAt;
      state.candidateInfo.createdAt = payload.createdAt;
      break;

    case CANDIDATE_FORM_ACTIONS.FAILURE_ACTION:
      state.state.loading = false;
      state.state.error = true;
      state.state.errorMsg = payload;
      state.state.nextPageAllowed = false;
      break;

    default:
      return state;
  }
});

export default candidateFormReducer;
