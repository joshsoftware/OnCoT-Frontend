import produce from 'immer';
import { CANDIDATE_FORM_ACTIONS } from 'constants/actionConstants';
import local from 'utils/local';

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
  candidateId: local.getItem('candidateId') || '',
};

const candidateFormReducer = produce((draft = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CANDIDATE_FORM_ACTIONS.REQUEST_ACTION:
      draft.state.loading = true;
      break;

    case CANDIDATE_FORM_ACTIONS.SUCCESS_ACTION:
      draft.state.loading = false;
      draft.state.error = false;
      draft.state.nextPageAllowed = true;
      draft.candidateInfo.fName = payload.fName;
      draft.candidateInfo.lName = payload.lName;
      draft.candidateInfo.email = payload.email;
      draft.candidateInfo.mobile = payload.mobile;
      draft.candidateInfo.isProfileComplete = payload.isProfileComplete;
      draft.candidateInfo.updatedAt = payload.updatedAt;
      draft.candidateInfo.createdAt = payload.createdAt;
      break;

    case CANDIDATE_FORM_ACTIONS.FAILURE_ACTION:
      draft.state.loading = false;
      draft.state.error = true;
      draft.state.errorMsg = payload;
      draft.state.nextPageAllowed = false;
      break;

    default:
      return draft;
  }
});

export default candidateFormReducer;
