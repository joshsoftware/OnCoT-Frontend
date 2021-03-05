import produce from 'immer';
import { CANDIDATE_FORM_ACTIONS } from 'constants/candidateFormConstants';

export const initialState = {
  state: {
    loading: false,
    error: false,
    errorMsg: '',
  },
  candidateInfo: {
    fName: undefined,
    lName: undefined,
    mobile: undefined,
    email: undefined,
  },
};

const candidateFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case CANDIDATE_FORM_ACTIONS.REQUEST_ACTION:
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case CANDIDATE_FORM_ACTIONS.SUCCESS_ACTION:
      return produce(state, (draft) => {
        draft.state.loading = false;
        draft.state.error = false;
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
      });

    default:
      return state;
  }
};

export default candidateFormReducer;
