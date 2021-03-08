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
    fName: undefined,
    lName: undefined,
    mobile: undefined,
    email: undefined,
  },
  authToken: local.getItem('authToken') || '',
};

const candidateFormReducer = (state = initialState, action) => {
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
