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

const candidateFormReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CANDIDATE_FORM_ACTIONS.REQUEST_ACTION:
      return produce(state, (draft) => {
        draft.state.loading = true;
      });

    case CANDIDATE_FORM_ACTIONS.SUCCESS_ACTION:
      return produce(state, (draft) => {
        draft.state.loading = false;
        draft.state.error = false;
        draft.state.nextPageAllowed = true;
        draft.candidateInfo.fName = action.payload.fName;
        draft.candidateInfo.lName = action.payload.lName;
        draft.candidateInfo.email = action.payload.email;
        draft.candidateInfo.mobile = action.payload.mobile;
        draft.candidateInfo.isProfileComplete = action.payload.isProfileComplete;
        draft.candidateInfo.updatedAt = action.payload.updatedAt;
        draft.candidateInfo.createdAt = action.payload.createdAt;
      });

    case CANDIDATE_FORM_ACTIONS.FAILURE_ACTION:
      return produce(state, (draft) => {
        draft.state.loading = false;
        draft.state.error = true;
        draft.state.errorMsg = action.payload;
        draft.state.nextPageAllowed = false;
      });

    default:
      return state;
  }
};

export default candidateFormReducer;